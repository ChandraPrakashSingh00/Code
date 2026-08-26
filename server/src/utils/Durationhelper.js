/*
============================================================
  DURATION HELPER
  Parses a duration string like "3 months", "6", "1 month",
  "6 weeks", "45 days", or a combo like "2 Months 2 Weeks",
  into { months, weeks, days } and calculates an end date
  from a given start date.

  ⭐ FIX: pehle ye sirf ek number (months) extract karta tha,
  isliye "2 Months 2 Weeks" jaisi duration me "2 Weeks" wala
  hissa silently ignore ho jata tha. Ab months/weeks/days
  teeno alag-alag extract hote hain (jaise pehle sirf
  certificateGenerator.js me hota tha) — isliye ab dono
  jagah (controller + certificate PDF) same aur POORI
  calculation milegi.
============================================================
*/

// Extracts months/weeks/days from strings like:
// "3 months", "3 Months", "6 weeks", "45 Days",
// "2 Months 2 Weeks", "3month", "6" (plain number -> months)
const parseDuration = (duration) => {
  if (!duration) return null;

  const durationStr = String(duration).toLowerCase();

  let months = 0;
  let weeks = 0;
  let days = 0;
  let found = false;

  const regex = /(\d+(?:\.\d+)?)\s*(month|months|week|weeks|day|days)/g;
  let match;

  while ((match = regex.exec(durationStr)) !== null) {
    found = true;
    const value = parseFloat(match[1]);
    const unit = match[2];

    if (unit.startsWith("month")) months += value;
    else if (unit.startsWith("week")) weeks += value;
    else if (unit.startsWith("day")) days += value;
  }

  // Fallback: plain number like "3" -> assume it means months
  if (!found) {
    const num = parseFloat(durationStr);
    if (!isNaN(num) && num > 0) {
      months = num;
      found = true;
    }
  }

  if (!found || (months <= 0 && weeks <= 0 && days <= 0)) return null;

  return { months, weeks, days };
};

// Kept for backward compatibility — returns just the months
// portion (old callers that only cared about whole months).
const parseDurationToMonths = (duration) => {
  const parsed = parseDuration(duration);
  return parsed && parsed.months > 0 ? parsed.months : null;
};

// Adds `months` (can be fractional, e.g. 1.5) to `date`
// and returns a new Date object. Handles month-length/day
// overflow correctly (e.g. Jan 31 + 1 month -> Feb 28/29).
const addMonthsToDate = (date, months) => {
  const wholeMonths = Math.trunc(months);
  const fractionalMonth = months - wholeMonths;

  const originalDay = date.getDate();

  date.setMonth(date.getMonth() + wholeMonths);

  // If day overflowed into the next month (e.g. Jan 31 + 1 -> Mar 3
  // instead of Feb 28), roll back to the last day of the intended month.
  if (date.getDate() !== originalDay) {
    date.setDate(0);
  }

  if (fractionalMonth > 0) {
    const extraDays = Math.round(fractionalMonth * 30);
    date.setDate(date.getDate() + extraDays);
  }

  return date;
};

// Main export: given a startDate and a duration string,
// returns { months, weeks, days, startDate, endDate }
// or null if duration is invalid / unparseable.
const calculateEndDate = (startDate, duration) => {
  const parsed = parseDuration(duration);

  if (!parsed) return null;

  const start = startDate ? new Date(startDate) : new Date();

  // ⭐ FIX: invalid startDate ko silently pass hone se roka
  // (pehle "Invalid Date" chup-chaap aage badh jata tha)
  if (isNaN(start.getTime())) return null;

  const end = new Date(start);

  addMonthsToDate(end, parsed.months);

  // weeks + days ko simple din ke roop me add karo
  const extraDays = Math.round(parsed.weeks * 7) + Math.round(parsed.days);
  if (extraDays > 0) {
    end.setDate(end.getDate() + extraDays);
  }

  return {
    months: parsed.months,
    weeks: parsed.weeks,
    days: parsed.days,
    startDate: start,
    endDate: end,
  };
};

module.exports = {
  parseDuration,
  parseDurationToMonths,
  addMonthsToDate,
  calculateEndDate,
};
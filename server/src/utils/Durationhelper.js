/*
============================================================
  DURATION HELPER

  Supports:
  - "3 months"
  - "1 month"
  - "6 weeks"
  - "45 days"
  - "2 Months 2 Weeks"
  - "2 Months 3 Weeks 5 Days"
  - "6" -> treated as 6 months

  Returns:
  {
    months,
    weeks,
    days,
    startDate,
    endDate
  }
============================================================
*/

/**
 * Parse duration string into months, weeks and days.
 */
const parseDuration = (duration) => {
  if (duration === undefined || duration === null) {
    return null;
  }

  const durationStr = String(duration).trim().toLowerCase();

  if (!durationStr) {
    return null;
  }

  let months = 0;
  let weeks = 0;
  let days = 0;
  let found = false;

  /*
    Supports:
    3 months
    1 month
    6 weeks
    45 days
    2 months 2 weeks
    2 months 3 weeks 5 days
    3month
    6weeks
  */
  const regex =
    /(\d+(?:\.\d+)?)\s*(months?|weeks?|days?)/gi;

  let match;

  while ((match = regex.exec(durationStr)) !== null) {
    found = true;

    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();

    if (Number.isNaN(value) || value <= 0) {
      continue;
    }

    if (unit.startsWith("month")) {
      months += value;
    } else if (unit.startsWith("week")) {
      weeks += value;
    } else if (unit.startsWith("day")) {
      days += value;
    }
  }

  /*
    If duration is only a number:
    "6" -> 6 months
  */
  if (!found) {
    const numericDuration = Number(durationStr);

    if (
      Number.isFinite(numericDuration) &&
      numericDuration > 0
    ) {
      months = numericDuration;
      found = true;
    }
  }

  if (
    !found ||
    (months <= 0 && weeks <= 0 && days <= 0)
  ) {
    return null;
  }

  return {
    months,
    weeks,
    days,
  };
};

/**
 * Backward compatibility.
 *
 * Returns only the month portion.
 */
const parseDurationToMonths = (duration) => {
  const parsed = parseDuration(duration);

  if (!parsed || parsed.months <= 0) {
    return null;
  }

  return parsed.months;
};

/**
 * Add months safely to a date.
 *
 * Example:
 * Jan 31 + 1 month
 * -> Feb 28/29
 *
 * Fractional months:
 * 1.5 months -> 1 month + approximately 15 days
 */
const addMonthsToDate = (date, months) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return date;
  }

  if (!Number.isFinite(months) || months <= 0) {
    return date;
  }

  const wholeMonths = Math.trunc(months);
  const fractionalMonth = months - wholeMonths;

  const originalDay = date.getDate();

  /*
    Move to the first day before changing month.
    This prevents JavaScript's month overflow problem.

    Example:
    Jan 31 + 1 month
    normally becomes Mar 3.
  */
  date.setDate(1);
  date.setMonth(date.getMonth() + wholeMonths);

  /*
    Get last day of target month.
  */
  const lastDayOfTargetMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  date.setDate(
    Math.min(originalDay, lastDayOfTargetMonth)
  );

  /*
    Handle fractional month.
    Example:
    1.5 months = 1 month + 15 days
  */
  if (fractionalMonth > 0) {
    const extraDays = Math.round(
      fractionalMonth * 30
    );

    date.setDate(date.getDate() + extraDays);
  }

  return date;
};

/**
 * Calculate internship end date.
 */
const calculateEndDate = (startDate, duration) => {
  const parsed = parseDuration(duration);

  if (!parsed) {
    return null;
  }

  const start = startDate
    ? new Date(startDate)
    : new Date();

  /*
    Prevent Invalid Date from being returned.
  */
  if (Number.isNaN(start.getTime())) {
    return null;
  }

  const end = new Date(start);

  /*
    Add months.
  */
  if (parsed.months > 0) {
    addMonthsToDate(end, parsed.months);
  }

  /*
    Add weeks and days.
  */
  const extraDays =
    Math.round(parsed.weeks * 7) +
    Math.round(parsed.days);

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
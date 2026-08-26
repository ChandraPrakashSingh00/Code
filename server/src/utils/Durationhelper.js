/*
============================================================
  DURATION HELPER
============================================================

  Supports:
  - "3 months"
  - "1 month"
  - "6 weeks"
  - "45 days"
  - "2 Months 2 Weeks"
  - "1 Month 10 Days"
  - "2 Months 2 Weeks 5 Days"
  - "6" -> treated as 6 months

============================================================
*/

const parseDuration = (duration) => {
  if (duration === null || duration === undefined) {
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

  const regex =
    /(\d+(?:\.\d+)?)\s*(month|months|week|weeks|day|days)/gi;

  let match;

  while ((match = regex.exec(durationStr)) !== null) {
    found = true;

    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();

    if (!Number.isFinite(value) || value < 0) {
      continue;
    }

    if (unit === "month" || unit === "months") {
      months += value;
    } else if (unit === "week" || unit === "weeks") {
      weeks += value;
    } else if (unit === "day" || unit === "days") {
      days += value;
    }
  }

  /*
  Plain number:
  "3" => 3 months
  "6" => 6 months
  */
  if (!found) {
    const num = Number(durationStr);

    if (Number.isFinite(num) && num > 0) {
      months = num;
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


/*
============================================================
  BACKWARD COMPATIBILITY
============================================================
*/

const parseDurationToMonths = (duration) => {
  const parsed = parseDuration(duration);

  if (!parsed) {
    return null;
  }

  return parsed.months > 0 ? parsed.months : null;
};


/*
============================================================
  ADD MONTHS SAFELY
============================================================

  Example:

  Jan 31 + 1 month
  => Feb 28/29

============================================================
*/

const addMonthsToDate = (date, months) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return date;
  }

  if (!Number.isFinite(months)) {
    return date;
  }

  const wholeMonths = Math.trunc(months);
  const fractionalMonth = months - wholeMonths;

  const originalDay = date.getDate();

  /*
  Set date to first day before changing month.
  This prevents JS Date overflow.
  */
  date.setDate(1);

  date.setMonth(
    date.getMonth() + wholeMonths
  );

  /*
  Find last day of target month.
  */
  const lastDayOfTargetMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  date.setDate(
    Math.min(
      originalDay,
      lastDayOfTargetMonth
    )
  );

  /*
  Fractional month:
  0.5 month ≈ 15 days
  0.25 month ≈ 7.5 days
  */
  if (fractionalMonth > 0) {
    const extraDays = Math.round(
      fractionalMonth * 30
    );

    date.setDate(
      date.getDate() + extraDays
    );
  }

  return date;
};


/*
============================================================
  CALCULATE END DATE
============================================================
*/

const calculateEndDate = (
  startDate,
  duration
) => {
  const parsed = parseDuration(duration);

  if (!parsed) {
    return null;
  }

  const start = startDate
    ? new Date(startDate)
    : new Date();

  /*
  Invalid start date protection
  */
  if (isNaN(start.getTime())) {
    return null;
  }

  const end = new Date(start);

  /*
  Add months
  */
  if (parsed.months > 0) {
    addMonthsToDate(
      end,
      parsed.months
    );
  }

  /*
  Add weeks + days
  */
  const extraDays =
    Math.round(parsed.weeks * 7) +
    Math.round(parsed.days);

  if (extraDays > 0) {
    end.setDate(
      end.getDate() + extraDays
    );
  }

  return {
    months: parsed.months,
    weeks: parsed.weeks,
    days: parsed.days,

    startDate: start,
    endDate: end,
  };
};


/*
============================================================
  EXPORTS
============================================================
*/

module.exports = {
  parseDuration,
  parseDurationToMonths,
  addMonthsToDate,
  calculateEndDate,
};
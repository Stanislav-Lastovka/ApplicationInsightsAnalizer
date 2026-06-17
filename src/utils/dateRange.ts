export type DateRange = {
  from: string;
  to: string;
};

const RELATIVE_PATTERN = /^(\d+)(m|h|d)$/i;

export function parseDateRange(fromInput: string, toInput?: string): DateRange {
  const to = toInput ? parseDate(toInput) : new Date();
  const relative = RELATIVE_PATTERN.exec(fromInput);

  if (relative) {
    const amount = Number(relative[1]);
    const unit = relative[2].toLowerCase();
    const from = new Date(to);

    if (unit === "m") {
      from.setUTCMinutes(from.getUTCMinutes() - amount);
    } else if (unit === "h") {
      from.setUTCHours(from.getUTCHours() - amount);
    } else {
      from.setUTCDate(from.getUTCDate() - amount);
    }

    return { from: from.toISOString(), to: to.toISOString() };
  }

  return {
    from: parseDate(fromInput).toISOString(),
    to: to.toISOString()
  };
}

function parseDate(input: string): Date {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${input}`);
  }

  return date;
}

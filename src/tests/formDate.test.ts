import { formatDateToYYYYMMDD } from '../utils/formatDate';

describe('dateUtils', () => {
  test('formatDateToYYYYMMDD formats date correctly', () => {
    const testDate = new Date('2023-01-01T00:00:00');
    const formattedDate = formatDateToYYYYMMDD(testDate);

    expect(formattedDate).toBe('2023-01-01');
  });

  test('formatDateToYYYYMMDD pads single-digit month and day', () => {
    const testDate = new Date('2023-09-09T00:00:00');
    const formattedDate = formatDateToYYYYMMDD(testDate);

    expect(formattedDate).toBe('2023-09-09');
  });
});

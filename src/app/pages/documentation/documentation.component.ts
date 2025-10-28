import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';

interface ApiParameter {
  name: string;
  type: string;
  description: string;
}

interface ApiItem {
  name: string;
  type: string;
  description: string;
  example?: string;
  required?: boolean;
  default?: string;
  note?: string;
  options?: string[];
  parameters?: ApiParameter[];
  returns?: string;
}

interface ApiSection {
  title: string;
  icon: string;
  description: string;
  items: ApiItem[];
}

interface FunctionParameter {
  name: string;
  type: string;
  description?: string;
}

interface FunctionDoc {
  id: string;
  name: string;
  description: string;
  parameters: FunctionParameter[];
  returns: string;
  example: string;
  code: string;
  category?: string;
}


@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    RtcNepaliDatePickerModule
  ],
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {

  searchQuery = signal('');

  functions : FunctionDoc[] = [
  {
    id: 'ad2bs',
    name: 'AD2BS',
    description: 'Converts AD (Gregorian) date object or string to BS (Bikram Sambat) date object or formatted string.',
    code: 'AD2BS(adDate: DateObject | string, sourceDateFormat?: string, returnDateFormat?: string): Promise<DateObject | string>',
    parameters: [
      { name: 'adDate', type: 'DateObject | string', description: 'AD date as object {year, month, day} or string' },
      { name: 'sourceDateFormat', type: 'string', description: 'Format of source date if string (e.g., "YYYY-MM-DD")' },
      { name: 'returnDateFormat', type: 'string', description: 'Desired return format (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Date object or formatted string',
    example: `RtcNepaliDatepickerService.AD2BS({year: 2001, month: 6, day: 1}) 
// Returns: {year: 2058, month: 2, day: 19}

RtcNepaliDatepickerService.AD2BS("2001-06-01", "YYYY-MM-DD", "YYYY-MM-DD") 
// Returns: "2058-02-19"`,
  },
  {
    id: 'bs2ad',
    name: 'BS2AD',
    description: 'Converts BS (Bikram Sambat) date object or string to AD (Gregorian) date object or formatted string.',
    code: 'BS2AD(bsDate: DateObject | string, sourceDateFormat?: string, returnDateFormat?: string): Promise<DateObject | string>',
    parameters: [
      { name: 'bsDate', type: 'DateObject | string', description: 'BS date as object {year, month, day} or string' },
      { name: 'sourceDateFormat', type: 'string', description: 'Format of source date if string (e.g., "YYYY-MM-DD")' },
      { name: 'returnDateFormat', type: 'string', description: 'Desired return format (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Date object or formatted string',
    example: `RtcNepaliDatepickerService.BS2AD({year: 2058, month: 2, day: 19}) 
// Returns: {year: 2001, month: 6, day: 1}

RtcNepaliDatepickerService.BS2AD("2058-02-19", "YYYY-MM-DD", "YYYY-MM-DD") 
// Returns: "2001-06-01"`,
  },
  {
    id: 'convert-to-date-format',
    name: 'ConvertToDateFormat',
    description: 'Converts a date object or string to a formatted date string in the specified format. Supports various format patterns like YYYY-MM-DD, DD/MM/YYYY, etc.',
    code: 'ConvertToDateFormat(dateObject: DateObject | string, returnFormat: string, sourceDateFormat?: string): Promise<string>',
    parameters: [
      { name: 'dateObject', type: 'DateObject | string', description: 'Date object with {year, month, day} or date string' },
      { name: 'returnFormat', type: 'string', description: 'Target format (e.g., "YYYY-MM-DD", "DD/MM/YYYY")' },
      { name: 'sourceDateFormat', type: 'string', description: 'Format of source date if string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Formatted date string',
    example: `RtcNepaliDatepickerService.ConvertToDateFormat({year: 2000, month: 1, day: 1}, "YYYY-MM-DD") 
// Returns: "2000-01-01"

RtcNepaliDatepickerService.ConvertToDateFormat("2058-02-19", "DD/MM/YYYY", "YYYY-MM-DD") 
// Returns: "19/02/2058"`,
  },
  {
    id: 'convert-to-date-object',
    name: 'ConvertToDateObject',
    description: 'Converts a date string to a date object format {year, month, day}. Parses the string according to the specified format.',
    code: 'ConvertToDateObject(dateString: string, dateFormat: string): Promise<DateObject>',
    parameters: [
      { name: 'dateString', type: 'string', description: 'Date as string' },
      { name: 'dateFormat', type: 'string', description: 'Format of the date string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Date object {year, month, day}',
    example: `RtcNepaliDatepickerService.ConvertToDateObject("2000-01-01", "YYYY-MM-DD") 
// Returns: {year: 2000, month: 1, day: 1}

RtcNepaliDatepickerService.ConvertToDateObject("19/02/2058", "DD/MM/YYYY") 
// Returns: {year: 2058, month: 2, day: 19}`,
  },
  {
    id: 'convert-to-number',
    name: 'ConvertToNumber',
    description: 'Converts Nepali unicode numbers (Devanagari digits) to standard numeric format. Useful for processing Nepali text input.',
    code: 'ConvertToNumber(unicode: string): Promise<number>',
    parameters: [
      { name: 'unicode', type: 'string', description: 'Nepali unicode number string' },
    ],
    returns: 'Number',
    example: `RtcNepaliDatepickerService.ConvertToNumber("१२३४५६७८९") 
// Returns: 123456789

RtcNepaliDatepickerService.ConvertToNumber("२०५८") 
// Returns: 2058`,
  },
  {
    id: 'convert-to-unicode',
    name: 'ConvertToUnicode',
    description: 'Converts standard numbers to Nepali unicode (Devanagari digits). Useful for displaying numbers in Nepali format.',
    code: 'ConvertToUnicode(number: number): Promise<string>',
    parameters: [
      { name: 'number', type: 'number', description: 'Standard numeric value' },
    ],
    returns: 'Nepali unicode string',
    example: `RtcNepaliDatepickerService.ConvertToUnicode(123456789) 
// Returns: "१२३४५६७८९"

RtcNepaliDatepickerService.ConvertToUnicode(2058) 
// Returns: "२०५८"`,
  },
  {
    id: 'number-to-words',
    name: 'NumberToWords',
    description: 'Converts numeric values to their English word representation. Supports both integer and decimal numbers, with optional currency formatting.',
    code: 'NumberToWords(number: number, isCurrency: boolean): Promise<string>',
    parameters: [
      { name: 'number', type: 'number', description: 'Numeric value to convert' },
      { name: 'isCurrency', type: 'boolean', description: 'Indicates if the output should be in currency format' },
    ],
    returns: 'Number in English words',
    example: `RtcNepaliDatepickerService.NumberToWords(123456000.12, true) 
// Returns: "Twelve Crore Thirty Four Lakh Fifty Six Thousand Rupees and Twelve Paisa"

RtcNepaliDatepickerService.NumberToWords(1234, false) 
// Returns: "One Thousand Two Hundred Thirty Four"`,
  },
  {
    id: 'number-to-words-unicode',
    name: 'NumberToWordsUnicode',
    description: 'Converts numeric values to their Nepali word representation in Unicode format. Supports both integer and decimal numbers, with optional currency formatting.',
    code: 'NumberToWordsUnicode(number: number, isCurrency: boolean): Promise<string>',
    parameters: [
      { name: 'number', type: 'number', description: 'Numeric value to convert' },
      { name: 'isCurrency', type: 'boolean', description: 'Indicates if the output should be in currency format' },
    ],
    returns: 'Unicode representation of number in Nepali words',
    example: `RtcNepaliDatepickerService.NumberToWordsUnicode(123456000.12, true) 
// Returns: "बाह्र करोड चौतीस लाख छपन्न हजार रुपैंया, बाह्र पैसा"

RtcNepaliDatepickerService.NumberToWordsUnicode(12, false) 
// Returns: "बाह्र"`,
  },
  {
    id: 'parse-date',
    name: 'ParseDate',
    description: 'Parses a date string and returns it in object format {year, month, day} along with the detected format.',
    code: 'ParseDate(dateString: string): Promise<{ parsedDate: DateObject; parsedFormat: string }>',
    parameters: [
      { name: 'dateString', type: 'string', description: 'Any date string' },
    ],
    returns: 'Object containing parsed date and its format',
    example: `RtcNepaliDatepickerService.ParseDate("2000-01-01") 
// Returns: { parsedDate: { year: 2000, month: 1, day: 1 }, parsedFormat: "YYYY-MM-DD" }`,

},
  {
    id: 'ad-dates-diff',
    name: 'ADDatesDiff',
    description: 'Calculates the number of days between two AD (Gregorian) dates.',
    code: 'ADDatesDiff(startDate: DateObject | string, endDate: DateObject | string, dateFormat?: string): Promise<number>',
    parameters: [
      { name: 'startDate', type: 'DateObject | string', description: 'Start AD date as object or string' },
      { name: 'endDate', type: 'DateObject | string', description: 'End AD date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Number of days between the two AD dates',
    example: `RtcNepaliDatepickerService.ADDatesDiff({year: 2003, month: 5, day: 2}, {year: 2003, month: 8, day: 1}) 
// Returns: 91

RtcNepaliDatepickerService.ADDatesDiff("2003-05-02", "2003-08-01", "YYYY-MM-DD") 
// Returns: 91`,
  },
  {
    id: 'ad-get-current-date',
    name: 'ADGetCurrentDate',
    description: 'Returns the current AD (Gregorian) date as an object or formatted string.',
    code: 'ADGetCurrentDate(returnFormat?: string): Promise<DateObject | string>',
    parameters: [
      { name: 'returnFormat', type: 'string', description: 'Optional return format (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Current AD date object or formatted string',
    example: `RtcNepaliDatepickerService.ADGetCurrentDate() 
// Returns: {year: 2025, month: 10, day: 16}

RtcNepaliDatepickerService.ADGetCurrentDate("YYYY-MM-DD") 
// Returns: "2025-10-16"`,
  },
  {
    id: 'ad-get-current-day',
    name: 'ADGetCurrentDay',
    description: 'Returns the current day of the month in the AD (Gregorian) calendar.',
    code: 'ADGetCurrentDay(): Promise<number>',
    parameters: [],
    returns: 'Current AD day of the month',
    example: `RtcNepaliDatepickerService.ADGetCurrentDay() 
// Returns: 16 

// // if today is October 16, 2025`,

},
  {
    id: 'ad-get-current-month',
    name: 'ADGetCurrentMonth',
    description: 'Returns the current month in the AD (Gregorian) calendar.',
    code: 'ADGetCurrentMonth(): Promise<number>',
    parameters: [],
    returns: 'Current AD month',
    example: `RtcNepaliDatepickerService.ADGetCurrentMonth() 
// Returns: 10 

// // if today is October 16, 2025`,

},
  {
    id: 'ad-get-current-year',
    name: 'ADGetCurrentYear',
    description: 'Returns the current year in the AD (Gregorian) calendar.',
    code: 'ADGetCurrentYear(): Promise<number>',
    parameters: [],
    returns: 'Current AD year',
    example: `RtcNepaliDatepickerService.ADGetCurrentYear() 
// Returns: 2025 

// // if today is October 16, 2025`,

},
  {
    id: 'ad-get-day',
    name: 'ADGetDay',
    description: 'Returns the day of the week for a given index (0-6) in the AD (Gregorian) calendar.',
    code: 'ADGetDay(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Day index (0 = Sunday, 6 = Saturday)' },
    ],
    returns: 'Day name or null if invalid index',
    example: `RtcNepaliDatepickerService.ADGetDay(0) 
// Returns: "Sunday"

RtcNepaliDatepickerService.ADGetDay(5) 
// Returns: "Friday"
RtcNepaliDatepickerService.ADGetDay(7) 
// Returns: null`,
  },
  {
    id: 'ad-get-days',
    name: 'ADGetDays',
    description: 'Returns an array of day names in the AD (Gregorian) calendar.',
    code: 'ADGetDays(): Promise<string[]>',
    parameters: [],
    returns: 'Array of day names',
    example: `RtcNepaliDatepickerService.ADGetDays() 
// Returns: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]`,

},
  {
    id: 'ad-get-days-in-month',
    name: 'ADGetDaysInMonth',
    description: 'Returns the number of days in a given AD (Gregorian) year and month.',
    code: 'ADGetDaysInMonth(year: number, month: number): Promise<number>',
    parameters: [
      { name: 'year', type: 'number', description: 'Year in AD calendar' },
      { name: 'month', type: 'number', description: 'Month in AD calendar (1-12)' },
    ],
    returns: 'Number of days in the specified month',
    example: `RtcNepaliDatepickerService.ADGetDaysInMonth(2015, 2) 
// Returns: 28

RtcNepaliDatepickerService.ADGetDaysInMonth(2020, 1) 
// Returns: 31`,
  },
  {
    id: 'ad-get-day-short',
    name: 'ADGetDayShort',
    description: 'Returns the short form of the day of the week for a given index (0-6) in the AD (Gregorian) calendar.',
    code: 'ADGetDayShort(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Day index (0 = Sunday, 6 = Saturday)' },
    ],
    returns: 'Short day name or null if invalid index',
    example: `RtcNepaliDatepickerService.ADGetDayShort(0) 
// Returns: "S"

RtcNepaliDatepickerService.ADGetDayShort(5) 
// Returns: "F"
RtcNepaliDatepickerService.ADGetDayShort(7) 
// Returns: null`,
  },
  {
    id: 'ad-get-days-short',
    name: 'ADGetDaysShort',
    description: 'Returns an array of short day names in the AD (Gregorian) calendar.',
    code: 'ADGetDaysShort(): Promise<string[]>',
    parameters: [],
    returns: 'Array of short day names',
    example: `RtcNepaliDatepickerService.ADGetDaysShort() 
// Returns: ["S", "M", "T", "W", "T", "F", "S"]`,

},
  {
    id: 'ad-get-full-date',
    name: 'ADGetFullDate',
    description: 'Returns the full AD (Gregorian) date in a readable string format.',
    code: 'ADGetFullDate(adDate: DateObject | string, dateFormat?: string): Promise<string>',
    parameters: [
      { name: 'adDate', type: 'DateObject | string', description: 'AD date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Full AD date string',
    example: `RtcNepaliDatepickerService.ADGetFullDate({year: 2001, month: 3, day: 15}) 
// Returns: "15 March 2001"

RtcNepaliDatepickerService.ADGetFullDate("2003/05/02", "YYYY/MM/DD") 
// Returns: "2 May 2003"`,
  },
  {
    id: 'ad-get-full-day',
    name: 'ADGetFullDay',
    description: 'Returns the day of the week for a given AD (Gregorian) date.',
    code: 'ADGetFullDay(adDate: DateObject | string, dateFormat?: string): Promise<string>',
    parameters: [
      { name: 'adDate', type: 'DateObject | string', description: 'AD date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Day of the week',
    example: `RtcNepaliDatepickerService.ADGetFullDay({year: 2001, month: 3, day: 15}) 
// Returns: "Thursday"

RtcNepaliDatepickerService.ADGetFullDay("2003-05-02", "YYYY-MM-DD") 
// Returns: "Friday"`,
  },
  {
    id: 'ad-get-month',
    name: 'ADGetMonth',
    description: 'Returns the name of the AD (Gregorian) month for a given index (0-11).',
    code: 'ADGetMonth(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Month index (0 = January, 11 = December)' },
    ],
    returns: 'Month name or null if invalid index',
    example: `RtcNepaliDatepickerService.ADGetMonth(0) 
// Returns: "January"

RtcNepaliDatepickerService.ADGetMonth(5) 
// Returns: "June"
RtcNepaliDatepickerService.ADGetMonth(12) 
// Returns: null`,
  },
  {
    id: 'ad-get-months',
    name: 'ADGetMonths',
    description: 'Returns an array of month names in the AD (Gregorian) calendar.',
    code: 'ADGetMonths(): Promise<string[]>',
    parameters: [],
    returns: 'Array of month names',
    example: `RtcNepaliDatepickerService.ADGetMonths() 
// Returns: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]`,

},
  {
    id: 'bs-add-days',
    name: 'BSAddDays',
    description: 'Adds a specified number of days to a BS (Bikram Sambat) date and returns the resulting date.',
    code: 'BSAddDays(bsDate: DateObject | string, noOfDays: number, dateFormat?: string): Promise<DateObject | string>',
    parameters: [
      { name: 'bsDate', type: 'DateObject | string', description: 'BS date as object or string' },
      { name: 'noOfDays', type: 'number', description: 'Number of days to add' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'BS date object or formatted string after adding days',
    example: `RtcNepaliDatepickerService.BSAddDays({year: 2001, month: 3, day: 15}, 2) 
// Returns: {year: 2001, month: 3, day: 17}

RtcNepaliDatepickerService.BSAddDays("2003-05-02", 90, "YYYY-MM-DD") 
// Returns: "2003-08-01"`,
  },
  {
    id: 'bs-dates-diff',
    name: 'BSDatesDiff',
    description: 'Calculates the number of days between two BS (Bikram Sambat) dates.',
    code: 'BSDatesDiff(startDate: DateObject | string, endDate: DateObject | string, dateFormat?: string): Promise<number>',
    parameters: [
      { name: 'startDate', type: 'DateObject | string', description: 'Start BS date as object or string' },
      { name: 'endDate', type: 'DateObject | string', description: 'End BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Number of days between the two BS dates',
    example: `RtcNepaliDatepickerService.BSDatesDiff({year: 2001, month: 3, day: 15}, {year: 2001, month: 3, day: 17}) 
// Returns: 2

RtcNepaliDatepickerService.BSDatesDiff("2003-05-02", "2003-08-01", "YYYY-MM-DD") 
// Returns: 90`,
  },
  {
    id: 'bs-get-current-date',
    name: 'BSGetCurrentDate',
    description: 'Returns the current BS (Bikram Sambat) date as an object or formatted string.',
    code: 'BSGetCurrentDate(returnFormat?: string): Promise<DateObject | string>',
    parameters: [
      { name: 'returnFormat', type: 'string', description: 'Optional return format (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Current BS date object or formatted string',
    example: `RtcNepaliDatepickerService.BSGetCurrentDate() 
// Returns: {year: 2082, month: 6, day: 30} 

// // if today is October 16, 2025

RtcNepaliDatepickerService.BSGetCurrentDate("YYYY-MM-DD") 
// Returns: "2082-06-30"`,
  },
  {
    id: 'bs-get-current-day',
    name: 'BSGetCurrentDay',
    description: 'Returns the current day of the month in the BS (Bikram Sambat) calendar.',
    code: 'BSGetCurrentDay(): Promise<number>',
    parameters: [],
    returns: 'Current BS day of the month',
    example: `RtcNepaliDatepickerService.BSGetCurrentDay() 
// Returns: 30 

// // if today is 30 Ashoj 2082`,

},
  {
    id: 'bs-get-current-month',
    name: 'BSGetCurrentMonth',
    description: 'Returns the current month in the BS (Bikram Sambat) calendar.',
    code: 'BSGetCurrentMonth(): Promise<number>',
    parameters: [],
    returns: 'Current BS month',
    example: `RtcNepaliDatepickerService.BSGetCurrentMonth() 
// Returns: 6 

// // if today is 30 Ashoj 2082`,

},
  {
    id: 'bs-get-current-year',
    name: 'BSGetCurrentYear',
    description: 'Returns the current year in the BS (Bikram Sambat) calendar.',
    code: 'BSGetCurrentYear(): Promise<number>',
    parameters: [],
    returns: 'Current BS year',
    example: `RtcNepaliDatepickerService.BSGetCurrentYear() 
// Returns: 2082 

// // if today is 30 Ashoj 2082`,

},
  {
    id: 'bs-get-day-in-unicode',
    name: 'BSGetDayInUnicode',
    description: 'Returns the BS (Bikram Sambat) day of the week in Unicode for a given index (0-6).',
    code: 'BSGetDayInUnicode(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Day index (0 = Sunday, 6 = Saturday)' },
    ],
    returns: 'Day name in Unicode or null if invalid index',
    example: `RtcNepaliDatepickerService.BSGetDayInUnicode(0) 
// Returns: "आइतवार"

RtcNepaliDatepickerService.BSGetDayInUnicode(4) 
// Returns: "बिहिवार"
RtcNepaliDatepickerService.BSGetDayInUnicode(7) 
// Returns: null`,
  },
  {
    id: 'bs-get-days-in-unicode-short',
    name: 'BSGetDaysInUnicodeShort',
    description: 'Returns an array of short BS (Bikram Sambat) day names in Unicode.',
    code: 'BSGetDaysInUnicodeShort(): Promise<string[]>',
    parameters: [],
    returns: 'Array of short day names in Unicode',
    example: `RtcNepaliDatepickerService.BSGetDaysInUnicodeShort() 
// Returns: ["आ", "सो", "मं", "बु", "बि", "शु", "श"]`,

},
  {
    id: 'bs-get-days-in-month',
    name: 'BSGetDaysInMonth',
    description: 'Returns the number of days in a given BS (Bikram Sambat) year and month.',
    code: 'BSGetDaysInMonth(year: number, month: number): Promise<number>',
    parameters: [
      { name: 'year', type: 'number', description: 'Year in BS calendar' },
      { name: 'month', type: 'number', description: 'Month in BS calendar (1-12)' },
    ],
    returns: 'Number of days in the specified month',
    example: `RtcNepaliDatepickerService.BSGetDaysInMonth(2015, 2) 
// Returns: 32

RtcNepaliDatepickerService.BSGetDaysInMonth(2020, 1) 
// Returns: 31`,
  },
  {
    id: 'bs-get-days-in-unicode',
    name: 'BSGetDaysInUnicode',
    description: 'Returns an array of BS (Bikram Sambat) day names in Unicode.',
    code: 'BSGetDaysInUnicode(): Promise<string[]>',
    parameters: [],
    returns: 'Array of day names in Unicode',
    example: `RtcNepaliDatepickerService.BSGetDaysInUnicode() 
// Returns: ["आइतवार", "सोमवार", "मङ्गलवार", "बुधवार", "बिहिवार", "शुक्रवार", "शनिवार"]`,

},
  {
    id: 'bs-get-day-in-unicode-short',
    name: 'BSGetDayInUnicodeShort',
    description: 'Returns the short BS (Bikram Sambat) day of the week in Unicode for a given index (0-6).',
    code: 'BSGetDayInUnicodeShort(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Day index (0 = Sunday, 6 = Saturday)' },
    ],
    returns: 'Short day name in Unicode or null if invalid index',
    example: `RtcNepaliDatepickerService.BSGetDayInUnicodeShort(0) 
// Returns: "आ"

RtcNepaliDatepickerService.BSGetDayInUnicodeShort(4) 
// Returns: "बि"
RtcNepaliDatepickerService.BSGetDayInUnicodeShort(7) 
// Returns: null`,
  },
  {
    id: 'bs-get-full-date',
    name: 'BSGetFullDate',
    description: 'Returns the full BS (Bikram Sambat) date in a readable string format, with optional Unicode output.',
    code: 'BSGetFullDate(bsDate: DateObject | string, unicodeFlag: boolean, dateFormat?: string): Promise<string>',
    parameters: [
      { name: 'bsDate', type: 'DateObject | string', description: 'BS date as object or string' },
      { name: 'unicodeFlag', type: 'boolean', description: 'True to return date in Unicode, false for English' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Full BS date string',
    example: `RtcNepaliDatepickerService.BSGetFullDate({year: 2075, month: 3, day: 15}, false) 
// Returns: "15 Ashar 2075"

RtcNepaliDatepickerService.BSGetFullDate("2075-03-15", true, "YYYY-MM-DD") 
// Returns: "१५ अषाढ २०७५"`,
  },
  {
    id: 'bs-get-full-day',
    name: 'BSGetFullDay',
    description: 'Returns the day of the week for a given BS (Bikram Sambat) date in English.',
    code: 'BSGetFullDay(bsDate: DateObject | string, dateFormat?: string): Promise<string>',
    parameters: [
      { name: 'bsDate', type: 'DateObject | string', description: 'BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Day of the week in English',
    example: `RtcNepaliDatepickerService.BSGetFullDay({year: 2045, month: 3, day: 15}) 
// Returns: "Wednesday"

RtcNepaliDatepickerService.BSGetFullDay("2077-05-02", "YYYY-MM-DD") 
// Returns: "Tuesday"`,
  },
  {
    id: 'bs-get-full-day-in-unicode',
    name: 'BSGetFullDayInUnicode',
    description: 'Returns the day of the week for a given BS (Bikram Sambat) date in Unicode.',
    code: 'BSGetFullDayInUnicode(bsDate: DateObject | string, dateFormat?: string): Promise<string>',
    parameters: [
      { name: 'bsDate', type: 'DateObject | string', description: 'BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'Day of the week in Unicode',
    example: `RtcNepaliDatepickerService.BSGetFullDayInUnicode({year: 2045, month: 3, day: 15}) 
// Returns: "बुधवार"

RtcNepaliDatepickerService.BSGetFullDayInUnicode("2077-05-02", "YYYY-MM-DD") 
// Returns: "मङ्गलवार"`,
  },
  {
    id: 'bs-get-month',
    name: 'BSGetMonth',
    description: 'Returns the name of the BS (Bikram Sambat) month in English for a given index (0-11).',
    code: 'BSGetMonth(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Month index (0 = Baisakh, 11 = Chaitra)' },
    ],
    returns: 'Month name in English or null if invalid index',
    example: `RtcNepaliDatepickerService.BSGetMonth(0) 
// Returns: "Baisakh"

RtcNepaliDatepickerService.BSGetMonth(5) 
// Returns: "Ashoj"
RtcNepaliDatepickerService.BSGetMonth(12) 
// Returns: null`,
  },
  {
    id: 'bs-get-month-in-unicode',
    name: 'BSGetMonthInUnicode',
    description: 'Returns the name of the BS (Bikram Sambat) month in Unicode for a given index (0-11).',
    code: 'BSGetMonthInUnicode(number: number): Promise<string | null>',
    parameters: [
      { name: 'number', type: 'number', description: 'Month index (0 = Baisakh, 11 = Chaitra)' },
    ],
    returns: 'Month name in Unicode or null if invalid index',
    example: `RtcNepaliDatepickerService.BSGetMonthInUnicode(0) 
// Returns: "बैशाख"

RtcNepaliDatepickerService.BSGetMonthInUnicode(5) 
// Returns: "आश्विन"
RtcNepaliDatepickerService.BSGetMonthInUnicode(12) 
// Returns: null`,
  },
  {
    id: 'bs-get-months',
    name: 'BSGetMonths',
    description: 'Returns an array of BS (Bikram Sambat) month names in English.',
    code: 'BSGetMonths(): Promise<string[]>',
    parameters: [],
    returns: 'Array of month names in English',
    example: `RtcNepaliDatepickerService.BSGetMonths() 
// Returns: ["Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"]`,

},
  {
    id: 'bs-get-months-in-unicode',
    name: 'BSGetMonthsInUnicode',
    description: 'Returns an array of BS (Bikram Sambat) month names in Unicode.',
    code: 'BSGetMonthsInUnicode(): Promise<string[]>',
    parameters: [],
    returns: 'Array of month names in Unicode',
    example: `RtcNepaliDatepickerService.BSGetMonthsInUnicode() 
// Returns: ["बैशाख", "जेठ", "अषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मङ्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"]`,

},
  {
    id: 'bs-is-between-dates',
    name: 'BSIsBetweenDates',
    description: 'Checks if a BS (Bikram Sambat) date is between two other BS dates.',
    code: 'BSIsBetweenDates(checkDate: DateObject | string, startDate: DateObject | string, endDate: DateObject | string, dateFormat?: string, inclusive?: boolean): Promise<boolean>',
    parameters: [
      { name: 'checkDate', type: 'DateObject | string', description: 'Date to check as object or string' },
      { name: 'startDate', type: 'DateObject | string', description: 'Start date as object or string' },
      { name: 'endDate', type: 'DateObject | string', description: 'End date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
      { name: 'inclusive', type: 'boolean', description: 'Whether to include start and end dates in the range' },
    ],
    returns: 'True if checkDate is between startDate and endDate',
    example: `RtcNepaliDatepickerService.BSIsBetweenDates({year: 2076, month: 2, day: 5}, {year: 2076, month: 1, day: 1}, {year: 2076, month: 2, day: 10}) 
// Returns: true

RtcNepaliDatepickerService.BSIsBetweenDates("2076-02-05", "2076-01-01", "2076-02-10", "YYYY-MM-DD") 
// Returns: true`,
  },
  {
    id: 'bs-is-equal-to',
    name: 'BSIsEqualTo',
    description: 'Checks if two BS (Bikram Sambat) dates are equal.',
    code: 'BSIsEqualTo(date1: DateObject | string, date2: DateObject | string, dateFormat?: string): Promise<boolean>',
    parameters: [
      { name: 'date1', type: 'DateObject | string', description: 'First BS date as object or string' },
      { name: 'date2', type: 'DateObject | string', description: 'Second BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'True if the dates are equal',
    example: `RtcNepaliDatepickerService.BSIsEqualTo({year: 2076, month: 1, day: 1}, {year: 2076, month: 1, day: 1}) 
// Returns: true

RtcNepaliDatepickerService.BSIsEqualTo("2076-01-01", "2076-01-01", "YYYY-MM-DD") 
// Returns: true`,
  },
  {
    id: 'bs-is-greater-than',
    name: 'BSIsGreaterThan',
    description: 'Checks if the first BS (Bikram Sambat) date is greater than the second.',
    code: 'BSIsGreaterThan(date1: DateObject | string, date2: DateObject | string, dateFormat?: string): Promise<boolean>',
    parameters: [
      { name: 'date1', type: 'DateObject | string', description: 'First BS date as object or string' },
      { name: 'date2', type: 'DateObject | string', description: 'Second BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'True if date1 is greater than date2',
    example: `RtcNepaliDatepickerService.BSIsGreaterThan({year: 2076, month: 2, day: 1}, {year: 2076, month: 1, day: 1}) 
// Returns: true

RtcNepaliDatepickerService.BSIsGreaterThan("2076-02-01", "2076-01-01", "YYYY-MM-DD") 
// Returns: true`,
  },
  {
    id: 'bs-is-greater-than-or-equal-to',
    name: 'BSIsGreaterThanOrEqualTo',
    description: 'Checks if the first BS (Bikram Sambat) date is greater than or equal to the second.',
    code: 'BSIsGreaterThanOrEqualTo(date1: DateObject | string, date2: DateObject | string, dateFormat?: string): Promise<boolean>',
    parameters: [
      { name: 'date1', type: 'DateObject | string', description: 'First BS date as object or string' },
      { name: 'date2', type: 'DateObject | string', description: 'Second BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'True if date1 is greater than or equal to date2',
    example: `RtcNepaliDatepickerService.BSIsGreaterThanOrEqualTo({year: 2076, month: 2, day: 1}, {year: 2076, month: 1, day: 1}) 
// Returns: true

RtcNepaliDatepickerService.BSIsGreaterThanOrEqualTo("2076-03-01", "2076-03-01", "YYYY-MM-DD") 
// Returns: true`,
  },
  {
    id: 'bs-is-less-than',
    name: 'BSIsLessThan',
    description: 'Checks if the first BS (Bikram Sambat) date is less than the second.',
    code: 'BSIsLessThan(date1: DateObject | string, date2: DateObject | string, dateFormat?: string): Promise<boolean>',
    parameters: [
      { name: 'date1', type: 'DateObject | string', description: 'First BS date as object or string' },
      { name: 'date2', type: 'DateObject | string', description: 'Second BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'True if date1 is less than date2',
    example: `RtcNepaliDatepickerService.BSIsLessThan({year: 2076, month: 1, day: 1}, {year: 2076, month: 2, day: 1}) 
// Returns: true

RtcNepaliDatepickerService.BSIsLessThan("2076-02-01", "2076-03-01", "YYYY-MM-DD") 
// Returns: true`,
  },
  {
    id: 'bs-is-less-than-or-equal-to',
    name: 'BSIsLessThanOrEqualTo',
    description: 'Checks if the first BS (Bikram Sambat) date is less than or equal to the second.',
    code: 'BSIsLessThanOrEqualTo(date1: DateObject | string, date2: DateObject | string, dateFormat?: string): Promise<boolean>',
    parameters: [
      { name: 'date1', type: 'DateObject | string', description: 'First BS date as object or string' },
      { name: 'date2', type: 'DateObject | string', description: 'Second BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of dates if provided as strings (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'True if date1 is less than or equal to date2',
    example: `RtcNepaliDatepickerService.BSIsLessThanOrEqualTo({year: 2076, month: 1, day: 1}, {year: 2076, month: 2, day: 1}) 
// Returns: true

RtcNepaliDatepickerService.BSIsLessThanOrEqualTo("2076-03-01", "2076-03-01", "YYYY-MM-DD") 
// Returns: true`,
  },
  {
    id: 'bs-validate-date',
    name: 'BSValidateDate',
    description: 'Validates a BS (Bikram Sambat) date to ensure it is a valid date.',
    code: 'BSValidateDate(bsDate: DateObject | string, dateFormat?: string): Promise<boolean>',
    parameters: [
      { name: 'bsDate', type: 'DateObject | string', description: 'BS date as object or string' },
      { name: 'dateFormat', type: 'string', description: 'Format of date if provided as string (e.g., "YYYY-MM-DD")' },
    ],
    returns: 'True if the date is valid',
    example: `RtcNepaliDatepickerService.BSValidateDate({year: 2000, month: 2, day: 30}) 
// Returns: true

RtcNepaliDatepickerService.BSValidateDate("2078-01-05", "YYYY-MM-DD") 
// Returns: true
RtcNepaliDatepickerService.BSValidateDate("2078-01-32", "YYYY-MM-DD") 
// Returns: false`,
  },
];

  filteredFunctions = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) {
      return this.functions;
    }
    return this.functions.filter(fn =>
      fn.name.toLowerCase().includes(query) ||
      fn.description.toLowerCase().includes(query) ||
      fn.category?.toLowerCase().includes(query)
    );
  });

  scrollToFunction(id: string, offset: number = 44) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        window.scrollBy({
          top: -offset,
          left: 0,
          behavior: 'smooth'
        });
      }, 50);
    }
  }


  apiSections: ApiSection[] = [
    {
      title: 'Directive Properties',
      icon: 'settings',
      description: 'Properties that can be set on the nepaliDatepicker directive',
      items: [
        { name: 'minDate', type: 'string', description: 'Minimum selectable date in YYYY-MM-DD format', example: 'minDate="2080-01-01"', required: false },
        { name: 'maxDate', type: 'string', description: 'Maximum selectable date in YYYY-MM-DD format', example: 'maxDate="2080-12-31"', required: false },
        { name: 'dateFormat', type: 'string', description: 'Format for displaying dates', example: 'dateFormat="DD/MM/YYYY"', options: ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'DD-MM-YYYY', 'YYYY/MM/DD'] },
        { name: 'theme', type: 'string', description: 'Visual theme for the datepicker', example: 'theme="material"', options: ['default', 'material', 'bootstrap', 'custom'] },
        { name: 'showTodayButton', type: 'boolean', description: 'Whether to show "Today" button', example: '[showTodayButton]="true"', default: 'true' },
        { name: 'showClearButton', type: 'boolean', description: 'Whether to show "Clear" button', example: '[showClearButton]="true"', default: 'true' },
        { name: 'autoClose', type: 'boolean', description: 'Automatically close after selection', example: '[autoClose]="true"', default: 'true' },
        { name: 'closeOnSelect', type: 'boolean', description: 'Close when a date is selected', example: '[closeOnSelect]="true"', default: 'true' },
        { name: 'disabledDays', type: 'number[]', description: 'Array of day numbers (0-6) to disable', example: '[disabledDays]="[0,6]"', note: '0 = Sunday, 6 = Saturday' }
      ]
    },
    {
      title: 'Events',
      icon: 'event',
      description: 'Events emitted by the nepaliDatepicker directive',
      items: [
        { name: 'dateChange', type: 'EventEmitter<string>', description: 'When a date is changed', example: '(dateChange)="onDateChange($event)"', parameters: [{ name: 'event', type: 'string', description: 'Selected date in configured format' }] },
        { name: 'dateSelect', type: 'EventEmitter<DateObject>', description: 'Full date object selected', example: '(dateSelect)="onDateSelect($event)"', parameters: [{ name: 'event', type: 'DateObject', description: 'Object with year, month, day' }] },
        { name: 'dateClear', type: 'EventEmitter<void>', description: 'When date is cleared', example: '(dateClear)="onDateClear()"' }
      ]
    },
    {
      title: 'Conversion Functions',
      icon: 'swap_horiz',
      description: 'Functions for date conversion between BS and AD',
      items: [
        { name: 'BS2AD', type: 'function', description: 'Convert BS to AD', example: 'BS2AD("2080-10-15")', parameters: [{ name: 'bsDate', type: 'string', description: 'YYYY-MM-DD' }], returns: 'string - AD date' },
        { name: 'AD2BS', type: 'function', description: 'Convert AD to BS', example: 'AD2BS("2024-01-15")', parameters: [{ name: 'adDate', type: 'string', description: 'YYYY-MM-DD' }], returns: 'string - BS date' },
      ]
    }
    
// ... add more sections as needed

];

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => console.log('Code copied to clipboard'));
  }
}

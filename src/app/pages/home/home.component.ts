import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { DateObject, RtcNepaliDatepickerComponent, RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    RouterModule,
    RtcNepaliDatePickerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  selectedDateLight: string = '';
  selectedDateDark: string = '';
  lightPickerId!: string;
  darkPickerId!: string;

  @ViewChild('lightPicker') lightPicker!: RtcNepaliDatepickerComponent;
  datepickerOptionsLight = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 2083, month: 1, day: 1 },
    disabled: true,
    inline: true
  };

  @ViewChild('darkPicker') darkPicker!: RtcNepaliDatepickerComponent;
  datepickerOptionsDark = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 2083, month: 1, day: 1 },
    disabled: true,
    mode: "dark",
    inline: true
  };
  
  lightPickerIdInput!: string;
  darkPickerIdInput!: string;

  datepickerOptionsLightInput = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 2083, month: 1, day: 1 },
    disabled: false,
  };

  datepickerOptionsDarkInput = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 2083, month: 1, day: 1 },
    disabled: false,
    mode: "dark",
  };

  features = [
    {
      icon: 'calendar_today',
      title: 'Nepali Date Support',
      description: 'Handle dates as both JavaScript objects and strings seamlessly.'
    },
    {
      icon: 'developer_board',
      title: 'Dual Build Support',
      description: 'Compatible with both Angular View Engine and Ivy compilation modes.'
    },
    {
      icon: 'sync_alt',
      title: 'Date Conversion',
      description: 'Easily convert dates between Bikram Sambat (BS) and Gregorian (AD) calendars.'
    },
    {
      icon: 'format_shapes',
      title: 'Custom Date Formats',
      description: 'Flexible configuration to display dates in your preferred formats.'
    },
    {
      icon: 'check_circle',
      title: 'Angular Forms Integration',
      description: 'Full support for both reactive and template-driven forms.'
    },
    {
      icon: 'build_circle',
      title: 'Additional Utilities',
      description: 'Includes handy functions like number-to-word conversion, Unicode handling, and more.'
    },
    {
      icon: 'bolt',
      title: 'Easy to Use',
      description: 'Designed with simplicity in mind for quick integration and minimal setup.'
    },
    {
      icon: 'phone_iphone',
      title: 'Responsive & Lightweight',
      description: 'Optimized for performance and mobile-friendly design with Dark mode support.'
    },
    {
      icon: 'handyman',
      title: 'Well-Maintained',
      description: 'Regular updates and active support to keep your app running smoothly.'
    }
  ];

  importCode = `import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';

@NgModule({
  imports: [
    RtcNepaliDatePickerModule
  ]
})
export class YourModule { }`;

  angularJsonCode = `"assets": 
[
    {
        "input": "./node_modules/@rishovt/angular-nepali-datepicker/assets",
        "glob": "**/*",
        "output": "/assets"
    }
]`;

  basicUsageCodeHtml = `<rtc-nepali-datepicker
  [options]="datepickerOptions"
  [value]="selectedDate"
  [pickerId]="inputId"
  (dateChange)="onDateSelect($event)">
</rtc-nepali-datepicker>`;


  basicUsageCodeTs = `
  import { NepaliDatepickerService } from '@rishovt/angular-nepali-datepicker';

  inputId = 'nepali-datepicker';
  public selectedDate: DateObject;
  public datepickerOptions: any;

  constructor(private dateService: RtcNepaliDatepickerService) {}
  
  this.datepickerOptions = {
    classes: \`form-control \${this.disabled ? 'np-date-picker-disabled' : ''}\`,
    placeholder: "Select Date",
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: null,
    disabled: false,
  };
  
  private async basicNepaliDateService() {
    const bsDateObject: DateObject = await this.dateService.BSGetCurrentDate();
    const adDateObject: DateObject = await this.dateService.ADGetCurrentDate();
    console.log(bsDateObject); // e.g., { year: 2078, month: 10, day: 14, value: '2078-10-14' }
    console.log(adDateObject); // e.g., { year: 2022, month: 3, day: 14, value: '2022-03-14' }
    
    // Convert AD to BS, and vice versa
    const bsDateString: any = await this.nepaliService.AD2BS(this.adDateString, this.options.dateFormat);
    const adDateString: any = await this.nepaliService.BS2AD(this.bsDateString, this.options.dateFormat);
  }
  
  private setDate(dateId: string, date: string) {
    this.nepaliService.setDate(this.inputId, bsDateString);
  }

  onDateSelect(event: DateObject) {
    this.selectedDate = event;
    console.log('Selected Date Object:', this.selectedDate);
  }`;


  constructor() { }

  ngOnInit() {
    this.lightPickerId = this.randomId();
    this.darkPickerId = this.randomId();
    this.lightPickerIdInput = this.randomId();
    this.darkPickerIdInput = this.randomId();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // Light picker
      const inputElLight = this.lightPicker.inputElementRef?.nativeElement;
      if (inputElLight) {
        inputElLight.NepaliDatePicker();

        const floatingLight = inputElLight.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingLight) {
          inputElLight.parentElement?.insertBefore(floatingLight, inputElLight.nextSibling);
          Object.assign(floatingLight.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }

      // Dark picker
      const inputElDark = this.darkPicker.inputElementRef?.nativeElement;
      if (inputElDark) {
        inputElDark.NepaliDatePicker();

        const floatingDark = inputElDark.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingDark) {
          inputElDark.parentElement?.insertBefore(floatingDark, inputElDark.nextSibling);
          Object.assign(floatingDark.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }
    }, 500);
  }




  onDateChange(date: string) {
    console.log('Selected date:', date);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a snackbar notification here
      console.log('Code copied to clipboard');
    });
  }

  public randomId(): string {
    const length = 5;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return 'nepali-datepicker' + result;
  }

  onDateSelectLight(event: DateObject) {
    this.selectedDateLight = event.value;
  }

  onDateSelectDark(event: DateObject) {
    this.selectedDateDark = event.value;
  }

}

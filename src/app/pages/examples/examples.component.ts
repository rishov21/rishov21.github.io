import { Component, ElementRef, model, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { DateObject, RtcNepaliDatepickerComponent, RtcNepaliDatePickerModule, RtcNepaliDatepickerService } from '@rishovt/angular-nepali-datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import Swal from 'sweetalert2';

interface ConfigOption {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}
@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    RtcNepaliDatePickerModule
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent implements OnInit {

  // Basic Examples
  basicDate: string = '';
  ngModelDate: string = '';

  // Form Control Examples
  formControl = new FormControl('');
  reactiveForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  // Conversion Examples
  bsToAdResult: string = '';
  adToBsResult: string = '';
  conversionInput: string = '';

  // Formatting Examples
  formattedDate: string = '';
  formatOptions = [
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
    { value: 'DD-MM-YYYY', label: 'DD-MM-YYYY' }
  ];
  selectedFormat: string = 'YYYY-MM-DD';

  // Range Picker Examples
  rangeStart: string = '';
  rangeEnd: string = '';

  // Configuration Examples
  minDate: string = '';
  maxDate: string = '';
  disabledDays: string[] = [];
  configDate: string = '';

  // Manual Set/Get Examples
  manualDate: string = '';
  manualInput: string = '';


  currentDate!: any;
  //start here
  optionsSingle = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    value: "2082-12-15",
    unicodeDate: false
  };
  optionsSingleId!: string;
  public optionsSingleValue: DateObject | string = "2082-12-15";

  optionsMultiple = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    value: "2082-06-31, 2082-07-01",
    multiple: true,
    unicodeDate: false
  };
  optionsMultipleId!: string;
  public optionsMultipleValue: DateObject | string = "2082-06-31, 2082-07-01";


  optionsRange = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    value: "2082-06-30 - 2082-07-01",
    range: true,
    unicodeDate: false
  };
  optionsRangeId!: string;
  public optionsRangeValue: DateObject | string = "2082-06-30 - 2082-07-01";

  optionsMiniEnglish = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    miniEnglishDates: true,
    unicodeDate: false
  };
  optionsMiniEnglishId!: string;
  public optionsMiniEnglishValue: DateObject | string = "";

  optionsMiniEnglishDark = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    miniEnglishDates: true,
    mode: "dark",
    unicodeDate: false
  };
  optionsMiniEnglishDarkId!: string;
  public optionsMiniEnglishDarkValue: DateObject | string = "";

  optionsFormat1 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat1Id!: string;
  public optionsFormat1Value: DateObject | string = "";

  optionsFormat2 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY/MM/DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat2Id!: string;
  public optionsFormat2Value: DateObject | string = "";

  optionsFormat3 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY.MM.DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat3Id!: string;
  public optionsFormat3Value: DateObject | string = "";

  optionsFormat4 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'DD/MM/YYYY',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat4Id!: string;
  public optionsFormat4Value: DateObject | string = "";

  optionsFormat5 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'DD/MM/YYYY',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat5Id!: string;
  public optionsFormat5Value: DateObject | string = "";

  optionsFormat6 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'DD.MM.YYYY',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat6Id!: string;
  public optionsFormat6Value: DateObject | string = "";

  optionsFormat7 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'MM-DD-YYYY',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsFormat7Id!: string;
  public optionsFormat7Value: DateObject | string = "";

  optionsFormat8 = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'MM/DD/YYYY',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
  };
  optionsFormat8Id!: string;
  public optionsFormat8Value: DateObject | string = "";

  optionsMinDate = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
  };
  optionsMinDateId!: string;
  public optionsMinDateValue: DateObject | string = "";

  optionsMaxDate = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    disabled: false,
    unicodeDate: false,
  };
  optionsMaxDateId!: string;
  public optionsMaxDateValue: DateObject | string = "";

  optionsMinMax = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
  };
  optionsMinMaxId!: string;
  public optionsMinMaxValue: DateObject | string = "";

  optionsOnSelect = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsOnSelectId!: string;
  public optionsOnSelectValue: DateObject | string = "";

  optionsOnClose = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    onClose: (date: any) => {
      this.fireInfoModalClose();
      console.log("Datepicker closed. Selected date:", date);
    }
  };
  optionsOnCloseId!: string;
  public optionsOnCloseValue: DateObject | string = "";

  optionsDisableToday = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    disableToday: true
  };
  optionsDisableTodayId!: string;
  public optionsDisableTodayValue: DateObject | string = "";

  optionsDisableDate = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsDisableDateId!: string;
  public optionsDisableDateValue: DateObject | string = "";

  optionsDisableDates = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false
  };
  optionsDisableDatesId!: string;
  public optionsDisableDatesValue: DateObject | string = "";

  optionsDisableBefore = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    disableDaysBefore: 5
  };
  optionsDisableBeforeId!: string;
  public optionsDisableBeforeValue: DateObject | string = "";

  optionsDisableAfter = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    disableDaysAfter: 5
  };
  optionsDisableAfterId!: string;
  public optionsDisableAfterValue: DateObject | string = "";

  optionsDisableBetween = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    disableDaysBefore: 5,
    disableDaysAfter: 5
  };
  optionsDisableBetweenId!: string;
  public optionsDisableBetweenValue: DateObject | string = "";

  optionsAnimationSlide = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    animation: 'slide'
  };
  optionsAnimationSlideId!: string;
  public optionsAnimationSlideValue: DateObject | string = "";

  optionsAnimationFade = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    animation: 'fade'
  };
  optionsAnimationFadeId!: string;
  public optionsAnimationFadeValue: DateObject | string = "";

  optionsRangeSelection = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    range: true
  };
  optionsRangeSelectionId!: string;
  public optionsRangeSelectionValue: DateObject | string = "";

  optionsMultipleSelection = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    multiple: true
  };
  optionsMultipleSelectionId!: string;
  public optionsMultipleSelectionValue: DateObject | string = "";

  optionsUnicode = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: true
  };
  optionsUnicodeId!: string;
  public optionsUnicodeValue: DateObject | string = "";

  optionsLanguage = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: false,
    unicodeDate: false,
    language: 'english'
  };
  optionsLanguageId!: string;
  public optionsLanguageValue: DateObject | string = "";

  @ViewChild('optionsInlineDiv') optionsInlineDiv!: RtcNepaliDatepickerComponent;
  optionsInline = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: true,
    unicodeDate: false,
    inline: true
  };
  optionsInlineId!: string;
  public optionsInlineValue: DateObject | string = "";

  @ViewChild('optionsInlineDarkDiv') optionsInlineDarkDiv!: RtcNepaliDatepickerComponent;
  optionsInlineDark = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: true,
    unicodeDate: false,
    inline: true,
    mode: "dark"
  };
  optionsInlineDarkId!: string;
  public optionsInlineDarkValue: DateObject | string = "";

  @ViewChild('optionsInlineEnglishDiv') optionsInlineEnglishDiv!: RtcNepaliDatepickerComponent;
  optionsInlineEnglish = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: true,
    unicodeDate: false,
    inline: true,
    language: "english"
  };
  optionsInlineEnglishId!: string;
  public optionsInlineEnglishValue: DateObject | string = "";

  @ViewChild('optionsInlineEnglishDarkDiv') optionsInlineEnglishDarkDiv!: RtcNepaliDatepickerComponent;
  optionsInlineEnglishDark = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: true,
    unicodeDate: false,
    inline: true,
    language: "english",
    mode: "dark"
  };
  optionsInlineEnglishDarkId!: string;
  public optionsInlineEnglishDarkValue: DateObject | string = "";

  @ViewChild('optionsInlineMiniEnglishDiv') optionsInlineMiniEnglishDiv!: RtcNepaliDatepickerComponent;
  optionsInlineMiniEnglish = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: true,
    unicodeDate: false,
    miniEnglishDates: true,
    inline: true
  };
  optionsInlineMiniEnglishId!: string;
  public optionsInlineMiniEnglishValue: DateObject | string = "";

  @ViewChild('optionsInlineMiniEnglishDarkDiv') optionsInlineMiniEnglishDarkDiv!: RtcNepaliDatepickerComponent;
  optionsInlineMiniEnglishDark = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 3000, month: 1, day: 1 },
    disabled: true,
    unicodeDate: false,
    miniEnglishDates: true,
    inline: true,
    mode: "dark"
  };
  optionsInlineMiniEnglishDarkId!: string;
  public optionsInlineMiniEnglishDarkValue: DateObject | string = "";
  loaded: boolean = false;

  constructor(private np: RtcNepaliDatepickerService) { }

  ngOnInit() {
    this.optionsSingleId = this.randomId();
    this.optionsMultipleId = this.randomId();
    this.optionsRangeId = this.randomId();
    this.optionsMiniEnglishId = this.randomId();
    this.optionsMiniEnglishDarkId = this.randomId();
    this.optionsFormat1Id = this.randomId();
    this.optionsFormat2Id = this.randomId();
    this.optionsFormat3Id = this.randomId();
    this.optionsFormat4Id = this.randomId();
    this.optionsFormat5Id = this.randomId();
    this.optionsFormat6Id = this.randomId();
    this.optionsFormat7Id = this.randomId();
    this.optionsFormat8Id = this.randomId();
    this.optionsMinDateId = this.randomId();
    this.optionsMaxDateId = this.randomId();
    this.optionsMinMaxId = this.randomId();
    this.optionsOnSelectId = this.randomId();
    this.optionsOnCloseId = this.randomId();
    this.optionsDisableTodayId = this.randomId();
    this.optionsDisableDateId = this.randomId();
    this.optionsDisableDatesId = this.randomId();
    this.optionsDisableBeforeId = this.randomId();
    this.optionsDisableAfterId = this.randomId();
    this.optionsDisableBetweenId = this.randomId();
    this.optionsAnimationSlideId = this.randomId();
    this.optionsAnimationFadeId = this.randomId();
    this.optionsRangeSelectionId = this.randomId();
    this.optionsMultipleSelectionId = this.randomId();
    this.optionsUnicodeId = this.randomId();
    this.optionsLanguageId = this.randomId();
    this.optionsInlineId = this.randomId();
    this.optionsInlineDarkId = this.randomId();
    this.optionsInlineEnglishId = this.randomId();
    this.optionsInlineEnglishDarkId = this.randomId();
    this.optionsInlineMiniEnglishId = this.randomId();
    this.optionsInlineMiniEnglishDarkId = this.randomId();
    this.test();

    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const optionsInlineDiv = this.optionsInlineDiv.inputElementRef?.nativeElement;
      if (optionsInlineDiv) {
        optionsInlineDiv.NepaliDatePicker();
        const floatingLight = optionsInlineDiv.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingLight) {
          optionsInlineDiv.parentElement?.insertBefore(floatingLight, optionsInlineDiv.nextSibling);
          Object.assign(floatingLight.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }

      const optionsInlineDarkDiv = this.optionsInlineDarkDiv.inputElementRef?.nativeElement;
      if (optionsInlineDarkDiv) {
        optionsInlineDarkDiv.NepaliDatePicker();
        const floatingDark = optionsInlineDarkDiv.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingDark) {
          optionsInlineDarkDiv.parentElement?.insertBefore(floatingDark, optionsInlineDarkDiv.nextSibling);
          Object.assign(floatingDark.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }

      const optionsInlineEnglishDiv = this.optionsInlineEnglishDiv.inputElementRef?.nativeElement;
      if (optionsInlineEnglishDiv) {
        optionsInlineEnglishDiv.NepaliDatePicker();
        const floatingEnglish = optionsInlineEnglishDiv.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingEnglish) {
          optionsInlineEnglishDiv.parentElement?.insertBefore(floatingEnglish, optionsInlineEnglishDiv.nextSibling);
          Object.assign(floatingEnglish.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }

      const optionsInlineEnglishDarkDiv = this.optionsInlineEnglishDarkDiv.inputElementRef?.nativeElement;
      if (optionsInlineEnglishDarkDiv) {
        optionsInlineEnglishDarkDiv.NepaliDatePicker();
        const floatingEnglishDark = optionsInlineEnglishDarkDiv.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingEnglishDark) {
          optionsInlineEnglishDarkDiv.parentElement?.insertBefore(floatingEnglishDark, optionsInlineEnglishDarkDiv.nextSibling);
          Object.assign(floatingEnglishDark.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }

      const optionsInlineMiniEnglishDiv = this.optionsInlineMiniEnglishDiv.inputElementRef?.nativeElement;
      if (optionsInlineMiniEnglishDiv) {
        optionsInlineMiniEnglishDiv.NepaliDatePicker();
        const floatingMiniEnglish = optionsInlineMiniEnglishDiv.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingMiniEnglish) {
          optionsInlineMiniEnglishDiv.parentElement?.insertBefore(floatingMiniEnglish, optionsInlineMiniEnglishDiv.nextSibling);
          Object.assign(floatingMiniEnglish.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }

      const optionsInlineMiniEnglishDarkDiv = this.optionsInlineMiniEnglishDarkDiv.inputElementRef?.nativeElement;
      if (optionsInlineMiniEnglishDarkDiv) {
        optionsInlineMiniEnglishDarkDiv.NepaliDatePicker();
        const floatingMiniEnglishDark = optionsInlineMiniEnglishDarkDiv.parentElement?.querySelector('.ndp-container') as HTMLElement;
        if (floatingMiniEnglishDark) {
          optionsInlineMiniEnglishDarkDiv.parentElement?.insertBefore(floatingMiniEnglishDark, optionsInlineMiniEnglishDarkDiv.nextSibling);
          Object.assign(floatingMiniEnglishDark.style, { position: 'relative', top: '0', left: '0', display: 'block' });
        }
      }
    }, 1000);
  }

  private async test() {
    this.currentDate = await this.np.BSGetCurrentDate();
    console.log(this.currentDate);

    const minDate = {
      year: this.currentDate.year,
      month: this.currentDate.month,
      day: 7,
    };

    const maxDate = {
      year: this.currentDate.year,
      month: this.currentDate.month,
      day: 23,
    };

    const disableDate = this.currentDate.year + '-' + this.currentDate.month + '-' + 16;

    const disableDate1 = this.currentDate.year + '-' + this.currentDate.month + '-' + 10;
    const disableDate2 = this.currentDate.year + '-' + this.currentDate.month + '-' + 14;
    const disableDate3 = this.currentDate.year + '-' + this.currentDate.month + '-' + 19;

    this.optionsMinDate = {
      ...this.optionsMinDate,
      minDate: minDate,
    } as any;

    this.optionsMaxDate = {
      ...this.optionsMaxDate,
      maxDate: maxDate,
    } as any;

    this.optionsMinMax = {
      ...this.optionsMinMax,
      minDate: minDate,
      maxDate: maxDate
    } as any;

    this.optionsDisableDate = {
      ...this.optionsDisableDate,
      disableDates: [disableDate]
    } as any;

    this.optionsDisableDates = {
      ...this.optionsDisableDates,
      disableDates: [disableDate1, disableDate2, disableDate3]
    } as any;
  }

  fireInfoModalWithClose() {
    return Swal.fire({
      text: `You selected: ${this.optionsOnSelectValue}`,
      icon: "info",
      confirmButtonText: "Got it",
      allowOutsideClick: false,
    });
  }

  fireInfoModalClose() {
    return Swal.fire({
      text: `Datepicker closed!`,
      icon: "info",
      confirmButtonText: "Got it",
      allowOutsideClick: false,
    });
  }

  onDateSelect(event: any, type: string) {
    switch (type) {
      case 'optionsSingle':
        this.optionsSingleValue = event.value;
        break;
      case 'optionsMultiple':
        this.optionsMultipleValue = event.map(((d: any) => d.value)).join(', ');
        break;
      case 'optionsRange':
        this.optionsRangeValue = event.map(((d: any) => d.value)).join(' - ');;
        break;
      case 'optionsMiniEnglish':
        this.optionsMiniEnglishValue = event.value;
        break;
      case 'optionsMiniEnglishDark':
        this.optionsMiniEnglishDarkValue = event.value;
        break;
      case 'optionsFormat1':
        this.optionsFormat1Value = event.value;
        break;
      case 'optionsFormat2':
        this.optionsFormat2Value = event.value;
        break;
      case 'optionsFormat3':
        this.optionsFormat3Value = event.value;
        break;
      case 'optionsFormat4':
        this.optionsFormat4Value = event.value;
        break;
      case 'optionsFormat5':
        this.optionsFormat5Value = event.value;
        break;
      case 'optionsFormat6':
        this.optionsFormat6Value = event.value;
        break;
      case 'optionsFormat7':
        this.optionsFormat7Value = event.value;
        break;
      case 'optionsFormat8':
        this.optionsFormat8Value = event.value;
        break;
      case 'optionsMinDate':
        this.optionsMinDateValue = event.value;
        break;
      case 'optionsMaxDate':
        this.optionsMaxDateValue = event.value;
        break;
      case 'optionsMinMax':
        this.optionsMinMaxValue = event.value;
        break;
      case 'optionsOnSelect':
        this.optionsOnSelectValue = event.value;
        setTimeout(() => {
          this.fireInfoModalWithClose();
        }, 500);
        break;
      case 'optionsOnClose':
        this.optionsOnCloseValue = event.value;
        break;
      case 'optionsDisableToday':
        this.optionsDisableTodayValue = event.value;
        break;
      case 'optionsDisableDate':
        this.optionsDisableDateValue = event.value;
        break;
      case 'optionsDisableDates':
        this.optionsDisableDatesValue = event.value;
        break;
      case 'optionsDisableBefore':
        this.optionsDisableBeforeValue = event.value;
        break;
      case 'optionsDisableAfter':
        this.optionsDisableAfterValue = event.value;
        break;
      case 'optionsDisableBetween':
        this.optionsDisableBetweenValue = event.value;
        break;
      case 'optionsAnimationSlide':
        this.optionsAnimationSlideValue = event.value;
        break;
      case 'optionsAnimationFade':
        this.optionsAnimationFadeValue = event.value;
        break;
      case 'optionsRangeSelection':
        this.optionsRangeSelectionValue = event.map(((d: any) => d.value)).join(' - ');;
        break;
      case 'optionsMultipleSelection':
        this.optionsMultipleSelectionValue = event.map(((d: any) => d.value)).join(', ');
        break;
      case 'optionsUnicode':
        this.optionsUnicodeValue = event.value;
        break;
      case 'optionsLanguage':
        this.optionsLanguageValue = event.value;
        break;
      case 'optionsInline':
        this.optionsInlineValue = event.value;
        break;
      case 'optionsInlineDark':
        this.optionsInlineDarkValue = event.value;
        break;
      case 'optionsInlineEnglish':
        this.optionsInlineEnglishValue = event.value;
        break;
      case 'optionsInlineEnglishDark':
        this.optionsInlineEnglishDarkValue = event.value;
        break;
      case 'optionsInlineMiniEnglish':
        this.optionsInlineMiniEnglishValue = event.value;
        break;
      case 'optionsInlineMiniEnglishDark':
        this.optionsInlineMiniEnglishDarkValue = event.value;
        break;
    }
  }

  convertBsToAd() {
    if (this.conversionInput) {
      // This would use the actual conversion function from the library
      this.bsToAdResult = `Converted: ${this.conversionInput} (BS) → 2024-01-15 (AD)`;
    }
  }

  convertAdToBs() {
    if (this.conversionInput) {
      // This would use the actual conversion function from the library
      this.adToBsResult = `Converted: ${this.conversionInput} (AD) → 2080-10-01 (BS)`;
    }
  }

  formatDate() {
    if (this.formattedDate) {
      // This would use the actual formatting function from the library
      console.log(`Formatted date: ${this.formattedDate} in ${this.selectedFormat} format`);
    }
  }

  setManualDate() {
    if (this.manualInput) {
      this.manualDate = this.manualInput;
    }
  }

  getManualDate() {
    console.log('Current manual date:', this.manualDate);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Code copied to clipboard');
    });
  }

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

  public randomId(): string {
    const length = 5;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return 'nepali-datepicker' + result;
  }
}

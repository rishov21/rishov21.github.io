import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RtcNepaliDatePickerModule, RtcNepaliDatepickerService } from '@rishovt/angular-nepali-datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule,
    RtcNepaliDatePickerModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);

  // Signals
  isDarkMode = signal(false);
  isMobile = signal(false);
  sidenavOpened = signal(false);

  // Navigation items
  navigationItems = [
    { label: 'Home', route: '/home', icon: 'home' },
    { label: 'Supported Options', route: '/supported-options', icon: 'code' },
    { label: 'Documentation', route: '/documentation', icon: 'api' }
  ];

  selectedDate: string = '';

  selectedDateLight: string = '';
  selectedDateDark: string = '';
  lightPickerId!: string;
  darkPickerId!: string;

  datepickerOptionsLight = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 2083, month: 1, day: 1 },
    disabled: false,
  };

  datepickerOptionsDark = {
    classes: `form-control`,
    placeholder: 'Select a date',
    dateFormat: 'YYYY-MM-DD',
    closeOnDateSelect: true,
    minDate: { year: 1800, month: 1, day: 1 },
    maxDate: { year: 2083, month: 1, day: 1 },
    disabled: false,
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


  installationCode = `npm install @rishovt/angular-nepali-datepicker`;

  importCode = `import { RtcNepaliDatePickerModule } from '@rishovt/angular-nepali-datepicker';

@NgModule({
  imports: [
    RtcNepaliDatePickerModule
  ]
})
export class YourModule { }`;

  basicUsageCode = `<input 
  type="text" 
  class="form-control" 
  placeholder="Select Date"
  [(ngModel)]="selectedDate"
  nepaliDatepicker>`;

  constructor(private np: RtcNepaliDatepickerService) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(result => result.matches))
      .subscribe(isMobile => {
        this.isMobile.set(isMobile);
        if (!isMobile) this.sidenavOpened.set(false);
      });

    this.lightPickerId = this.randomId();
    this.darkPickerId = this.randomId();

    this.test();
  }

  private async test() {
    var abc = await this.np.AD2BS({ year: 2001, month: 6, day: 1, value: '' });
    console.log(abc);
  }

  // Toggle dark mode
  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    document.body.classList.toggle('dark-theme', this.isDarkMode());
  }

  reloadHome() {
    if (this.router.url === '/home') {
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']).then(() =>
          window.scrollTo({ top: 0, behavior: 'smooth' })
        );
      });
    } else {
      this.router.navigate(['/home']).then(() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      );
    }
  }

  fireInfoModalWithClose() {
    const isDark = this.isDarkMode();
    return Swal.fire({
      title: "Send Feedback",
      text: "We value your suggestions for the Angular Nepali Datepicker demo. Click \"Send Mail\" to open Gmail with a prefilled email to share your feedback, or \"Cancel\" to close this dialog.",
      icon: "info",
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Send Mail",
      allowOutsideClick: false,
      theme: isDark ? 'dark' : 'light',
    }).then((result) => {
      if (result.isConfirmed) {
        const email = 'andyrazor1994@gmail.com';
        const subject = encodeURIComponent('Suggestion/Feedback for Angular Nepali Datepicker');
        const body = encodeURIComponent(
          'Hello Rishov,\n\nI have a suggestion or feedback for your Angular Nepali Datepicker demo:\n\n'
        );
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
      }
    });
  }

  // Toggle sidenav
  toggleSidenav() {
    this.sidenavOpened.set(!this.sidenavOpened());
  }

  // Navigate to route
  navigateTo(route: string) {
    this.router.navigate([route]);
    if (this.isMobile()) this.sidenavOpened.set(false);
  }

  // Check active route
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  // Getters for template
  get mobileView(): boolean {
    return this.isMobile();
  }

  get darkMode(): boolean {
    return this.isDarkMode();
  }

  get sidenavState(): boolean {
    return this.sidenavOpened();
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

  onDateSelectLight(event: string) {
    this.selectedDateLight = event;
  }

  onDateSelectDark(event: string) {
    this.selectedDateDark = event;
  }
}

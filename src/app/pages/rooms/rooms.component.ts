import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoomService } from '@wawjs/ngx-horeca';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RoomBookingFormComponent } from '../../components/room-booking-form/room-booking-form.component';
import { companyProfile } from '../../feature/company/company.data';


@Component({
	imports: [NgOptimizedImage, RoomBookingFormComponent, RouterLink, TranslateDirective],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	private readonly _roomService = inject(RoomService);

	protected readonly amenities = [
		'Comfortable rooms',
		'Breakfast for guests',
		'Restaurant or cafe on site',
		'Room service',
		'Wi-Fi in rooms',
		'Parking',
		'Work area',
		'Air conditioning',
		'Transfer on request',
		'Booking support',
	];
	protected readonly loadingCards = [1, 2, 3];
	protected readonly rooms = this._roomService.rooms;
	protected readonly isLoading = this._roomService.isLoading;
	protected readonly hasRooms = computed(() => this.rooms().length > 0);
	protected readonly company = companyProfile;


	constructor() {
		effect(() => {
			this._roomService.loadTranslations();
		});
	}
}

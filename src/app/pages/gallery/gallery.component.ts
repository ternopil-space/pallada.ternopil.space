import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ExhibitService } from '@wawjs/ngx-horeca';

@Component({
	imports: [TranslateDirective],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	private readonly _exhibitService = inject(ExhibitService);

	protected readonly exhibits = this._exhibitService.exhibits;
	protected readonly isLoading = this._exhibitService.isLoading;
	protected readonly activeIndex = signal<number | null>(null);

	protected open(index: number): void {
		this.activeIndex.set(index);
	}

	protected close(): void {
		this.activeIndex.set(null);
	}

	protected prev(): void {
		const current = this.activeIndex();
		if (current === null) return;
		const total = this.exhibits().length;
		this.activeIndex.set((current - 1 + total) % total);
	}

	protected next(): void {
		const current = this.activeIndex();
		if (current === null) return;
		const total = this.exhibits().length;
		this.activeIndex.set((current + 1) % total);
	}

	@HostListener('document:keydown', ['$event'])
	protected onKey(event: KeyboardEvent): void {
		if (this.activeIndex() === null) return;
		if (event.key === 'ArrowRight') this.next();
		if (event.key === 'ArrowLeft') this.prev();
		if (event.key === 'Escape') this.close();
	}
}

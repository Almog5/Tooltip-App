import { Directive, Input, HostListener, ElementRef, Renderer2 } from "@angular/core";


@Directive({
    selector: '[tooltip]',
})
export class TooltipDirective {
    @Input() placement: string;
    @Input() delay: number;
    clicked: boolean = false;
    tooltip: HTMLElement;
    offset = 10;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }


    @HostListener('click') onclick(eventData: Event) {
        this.clicked = true;
        console.log("hello from tooltip directive");
        !this.tooltip && this.show();
    }

    show() {
        console.log("hello from show()")
        this.TopOrButtom();
        this.create();
        this.setPosition();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
        this.onScroll(event) // on click check if tooltip is already out of range,
        // if thescreen is alredy scrolled down
    }

    hide() {
        if (this.clicked == true) {
            this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
            window.setTimeout(() => {
                this.renderer.removeChild(this.elRef.nativeElement, this.tooltip);
                this.tooltip = null;
            }, this.delay);
            this.clicked = false;
        }

    }

    create() {
        console.log("hello from create()")
        this.tooltip = this.renderer.createElement('span');

        this.renderer.appendChild(
            this.tooltip,
            this.renderer.createText("hey i am tooltip") // tooltip textNode
        );
        this.renderer.appendChild(this.elRef.nativeElement, this.tooltip);


        this.renderer.addClass(this.tooltip, `ng-tooltip`);
        this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);

        // delay
        this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
        this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
        this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
        this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);

    }

    setPosition() {
        console.log("hello from setPosition()")
        const hostPos = this.elRef.nativeElement.getBoundingClientRect();

        const tooltipPos = this.tooltip.getBoundingClientRect();
        // window scroll top
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        let top, left;

        if (this.placement === 'top') {
            top = hostPos.top - tooltipPos.height - this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        }

        if (this.placement === 'bottom') {
            top = hostPos.bottom + this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        }

        this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);
        this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
        this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (this.elRef.nativeElement.contains(event.target)) {
            console.log("clicked inside");
        } else {
            console.log("clicked outside");
            this.hide()
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        console.log("from onscroll()")
        if (this.clicked == true) {

            if (this.tooltip.offsetTop <= window.pageYOffset) {
                console.log("hey' you out of range !")
                this.renderer.removeClass(this.tooltip, `ng-tooltip-${this.placement}`);
                this.placement = 'bottom'
                this.setPosition()
            }
            else {
                this.renderer.removeClass(this.tooltip, `ng-tooltip-${this.placement}`);
                this.placement = 'top'
                this.setPosition()
            }
        }
    }
    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
        if (this.clicked == true) {
            this.hide()
        }
    }

    TopOrButtom() {
        this.placement = this.elRef.nativeElement.pageYOffset - 50 <= window.pageYOffset ? "buttom" : "top";
    }

}



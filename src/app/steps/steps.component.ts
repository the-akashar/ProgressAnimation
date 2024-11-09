import { Component } from '@angular/core';
import { uptime } from 'process';
import { Init } from 'v8';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {

ngOnInit(){


const progress: HTMLElement | null = document.getElementById('progress');
const prev: HTMLButtonElement | null = document.getElementById('prev') as HTMLButtonElement;
const next: HTMLButtonElement | null = document.getElementById('next') as HTMLButtonElement;
const circles: NodeListOf<HTMLElement> = document.querySelectorAll('.circle');

let currentActive: number = 1;

if (next && prev && progress) {
    next.addEventListener('click', () => {
        currentActive++;

        if (currentActive > circles.length) {
            currentActive = circles.length;
        }

        update();
    });

    prev.addEventListener('click', () => {
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }

        update();
    });

    function update(): void {
        circles.forEach((circle: HTMLElement, idx: number) => {
            if (idx < currentActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });

        const actives: NodeListOf<HTMLElement> = document.querySelectorAll('.active');
        if (progress) {
            progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
        }

        if (currentActive === 1) {
            if (prev) prev.disabled = true;
        } else if (currentActive === circles.length) {
            if (next) next.disabled = true;
        } else {
            if (prev) prev.disabled = false;
            if (next) next.disabled = false;
        }
    }

    // Success
}




  
}





  

}

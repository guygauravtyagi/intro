import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gt-matrix-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-background.component.html',
  styleUrl: './matrix-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixBackgroundComponent implements OnInit {
  
  @Input() splitIn: {    
    innerArr: string;
    delay: string;
  }[] = [];
  @Input() columns: number = 60;
  @Input() rows: number = 60;
  @Input() animationDelay: number = 15;
  @Input() charArr: string = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ日ｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ012345789:・."=*+-<>';
  iteration: string = '';  
  ngOnInit(): void {
    this.startAnimation();
  }


  startAnimation() {
    for (var x = 0; x < this.columns; x++) {
      this.splitIn[x] = {
        innerArr: '',
        delay: `animation-delay: ${Math.random()*this.animationDelay}s`
      };
      let temp = []
      for (var y = 0; y < this.rows; y++) {
        temp.push(this.charArr.split('')[Math.floor(Math.random() * this.charArr.length)]);
      }
      this.splitIn[x].innerArr = temp.join(' ');
    }
    this.iteration = `grid-template-columns:`.concat(' auto'.repeat(this.splitIn.length));
  }
}

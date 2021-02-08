# AngularPractice
Basic Logic Implementations 
1. tsconfig.json-> Configurations of typeScript, like src, output directory and to which version things need to come down 
2. angular.json-> in styles we write bootstrap path inside styles array and it will work
3. main.ts -> platformBrowserDynamic().bootstrapModule(AppModule) ->This is the place where AppModule is started engulfing whole app module  

4. app.module.ts -> bootstrap: [AppComponent] -> Thsi says the starting point of the application is AppComponent

5.Another way to write selectors is as attribute :

  @Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css'],
  
})
<app-user></app-user>

**If used as directives:
 @Component({
  selector:'[app-user]',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css'],
})
<div app-user></div>

6. For sending data from html to ts we use ()
   <input type="text" (input)="onUpdateUser($event)"/>
   onUpdateUser(input:Event){
   //console.log(input)
   this.userName = (input.target as HTMLInputElement).value; -> Type Casting
   this.userName = (<HTMLInputElement>input.target).value; -> Type Casting
   Ts doesn't know if input event is an HTMLInputElement thus we typecast
  }

7. Else condition is written in <ng-template #elseCondition></ng-template> with #local reference
   *ngIf="condition; else tempRef"
    

8. [ngStyle]="{'style-property':'value'}"
   <div [ngStyle]="{'background-color':getColor()}">UserName {{userNameTwoWay} will have dynamic NgStyle</div>

9. [ngClass]="{'className':true or false}" if its true it will apply the class

10. *ngFor="let data from users;"

11. Debug: webpack-> in .folder we can find the files
    In angular we have an chrome extension for debugging angular application Augury

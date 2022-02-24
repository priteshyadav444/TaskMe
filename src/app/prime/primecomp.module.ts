
import { AccordionModule } from 'primeng/accordion'; 
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {ListboxModule} from 'primeng/listbox';

// Declare Component
import { ButtonComponent } from '../comp/button/button.component';
import { ItemComponent } from '../comp/item/item.component';
import { HeaderComponent } from '../comp/header/header.component';
import { AddtaskComponent } from '../comp/addtask/addtask.component';
import { AboutComponent } from '../comp/about/about.component';
import { HomeComponent } from '../comp/view/home/home.component';
//Others Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



export const OtherModules = [   FormsModule,FontAwesomeModule, HttpClientModule]
export const PrimeComp  = [ ListboxModule,AccordionModule, MenubarModule, InputTextModule, ButtonModule, SplitterModule];
export const DeclareComp  = [ HomeComponent, AboutComponent, AddtaskComponent, ButtonComponent, ItemComponent, HeaderComponent,];


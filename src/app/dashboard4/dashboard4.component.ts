import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {AuthService} from '../service/auth.service'

@Component({
  selector: 'app-dashboard4',
  templateUrl: './dashboard4.component.html',
  styleUrls: ['./dashboard4.component.css']
})
export class Dashboard4Component implements OnInit {

  id: string;  

  TheBoatClub: string =         "Unaccepted plan tha ye bas 2 hour phele apne muhje bataya and hum chal pade...ye bata hai ki hum kuch bhi kidar bhi ker sakte hai... Tripsy ka alag maza..pica nd video nhi daale kyuki daalne jaise nhi thae😘❤️ apko yaad hoga mai kya bol raha hu...";
  YedaRepublic: string =        "Mera first ever club tha woh bhi apke sath first time thaa...pagal jaise dance kiye thae itna maze kiye...itna dance ki pair tut gaya.🤣 Humne sab move sab form ke dance ker liye thaee. Grp dance ho ya couple dance ho ya akele sab mai rock karta hai apka babyy🤣❤️";
  Celebrations: string =        "Small sweet sa celebration kiya humne... Special birthday celebrate kiye... Isae acha gift mai maang bhi nhi sakta joa apne diyaa ik ye birthday bohot miss karege hum ek dusre ko per we will make it special. Apka chote chote gift hamesha bata hai ki mere pass kyo hai";
  SpecialHoli: string =         "Holi haii...papa ko shak ho gaya🤣🤣per thik hai bohot ache cute pic hai maine abhi deke...bohot maze kiye itne saare log thae bohot maza aaya and last ka khana woh bhi apke hath ka best moment tha.. muhje apke hath ka khana khana aur hamesha ke liye";

  constructor(private router: Router, private authService: AuthService) { }  

  ngOnInit() {  
    this.id = localStorage.getItem('token');  
    //console.log(this.id);  
  }  
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/login4']);  
  } 

}

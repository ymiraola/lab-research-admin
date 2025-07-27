import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-flab-team',
  standalone: true,
  imports: [CommonModule, NzGridModule],
  templateUrl: './flab-team.component.html',
  styleUrl: './flab-team.component.scss'
})
export class FlabTeamComponent {

  teamMembers = [
    { 
      name: 'Dr. Cristiane Miranda Franca', 
      role: 'Principal Investigator',
      image: 'images/Cristiane.png',
      education: 'Ph.D. in Oral Pathology',
      expertise: 'Dr. Cristiane Miranda Franca is an Assistant Professor at OHSU’s School of Dentistry and Knight Cancer Precision Biofabrication Hub. With a Ph.D. in Oral Pathology and postdoctoral training in tissue engineering and microfluidics, she investigates immune–stromal interactions, cancer spread through the lymphatic system, and regenerative approaches for oral and craniofacial tissues.'
    },
    { 
      name: 'Pragyan Paramita', 
      role: 'Postdoctoral Scholar',
      image: 'images/Pragyan.png',
      education: 'Ph.D. in Biomedical Engineering',
      expertise: 'Pragyan Paramita is a postdoctoral scholar at the Knight Cancer Precision Biofabrication Hub, OHSU. She holds a Ph.D. in Biomedical Engineering from UC Davis, where she developed a microfluidic platform to study immune cells in cancer metastasis. Her research uses microfluidics and tissue engineering to investigate cancer progression and develop therapies.'
    },
    { 
      name: 'Pinaaz Kiran Hode', 
      role: 'Research Assistant',
      image: 'images/Pinaaz.png',
      education: 'B.Sc. in Biotechnology',
      expertise: 'Pinaaz Kiran Hode is a research assistant at the Knight Cancer Precision Biofabrication Hub, OHSU. She holds a B.Sc. in Biotechnology and is involved in various projects focusing on cancer research and tissue engineering.'
    },
    {
      name: 'Faisal Shakir',
      role: 'Volunteer Researcher',
      image: 'images/Faisal.png',
      education: 'B.Sc. in Biotechnology',
      expertise: 'Faisal Shakir is a volunteer researcher at the Knight Cancer Precision Biofabrication Hub, OHSU. He holds a B.Sc. in Biotechnology and contributes to ongoing research projects in cancer biology and tissue engineering.'
    },
    {
      name: 'Molly Mccoy',
      role: 'Volunteer',
      image: 'images/Molly.png',
      education: 'N/A',
      expertise: 'Molly Mccoy is a volunteer at the Knight Cancer Precision Biofabrication Hub, OHSU. She is passionate about cancer research and supports various projects within the lab.'
    }
  ];

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';
import { Housing } from '../lokasi-perumahan/lokasi-perumahan';

@Component({
  selector: 'app-home',
  imports: [LokasiPerumahan, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  //Array untuk data perumahan (bisa di isi dari backend nanti)
  housingList: Housing[] = [
    {
      id: 1,
      title: 'Griya Asri Residence',
      location: 'Jakarta Selatan',
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
      rating: 4.5,
      status: 'Available',
      type: 'rumah',
      description: 'Hunian modern dengan desain minimalis di kawasan Jakarta Selatan yang strategis.',
      postedDays: 2
    },
    {
  id: 2,
  title: 'Casa Harmoni Garden',
  location: 'Depok',
  price: 650000000,
  bedrooms: 2,
  bathrooms: 1,
  area: 90,
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  rating: 4.2,
  status: 'Available',
  type: 'rumah',
  description: 'Rumah nyaman dengan suasana tenang, cocok untuk keluarga kecil.',
  postedDays: 5
},
{
  id: 3,
  title: 'Skyline Apartment Tower B',
  location: 'Jakarta Pusat',
  price: 1200000000,
  bedrooms: 2,
  bathrooms: 2,
  area: 75,
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop',
  rating: 4.7,
  status: 'Available',
  type: 'apartemen',
  description: 'Apartemen modern dengan view kota dan fasilitas premium.',
  postedDays: 1
},
{
  id: 4,
  title: 'Grand Sentosa Residence',
  location: 'Bekasi',
  price: 780000000,
  bedrooms: 3,
  bathrooms: 2,
  area: 130,
  image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop',
  rating: 4.3,
  status: 'Booking',
  type: 'rumah',
  description: 'Hunian mewah dengan konsep eco-living dan area yang luas.',
  postedDays: 7
},
{
  id: 5,
  title: 'The Green Hill Residence',
  location: 'Bogor',
  price: 550000000,
  bedrooms: 2,
  bathrooms: 1,
  area: 85,
  image: 'https://images.unsplash.com/photo-1600585154207-8fd4be438d8e?w=600&h=400&fit=crop',
  rating: 4.1,
  status: 'Available',
  type: 'rumah',
  description: 'Rumah sejuk dengan pemandangan hijau khas kota Bogor.',
  postedDays: 10
},
{
  id: 6,
  title: 'Urban Loft Alam Sutera',
  location: 'Tangerang Selatan',
  price: 1450000000,
  bedrooms: 3,
  bathrooms: 2,
  area: 140,
  image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
  rating: 4.8,
  status: 'Available',
  type: 'rumah',
  description: 'Hunian premium dengan desain industrial-modern dan lokasi strategis.',
  postedDays: 3
}
];

  // housingList: Housing = [...];
  filteredList: Housing[] = [];
  selectedFilter: string = 'all';

  ngOnInit() {
    // Initialize filtered list with all housing
    this.filteredList = [...this.housingList];
  }

  filterByType(type: string) {
    this. selectedFilter = type;
    if (type === 'all') {
      this.filteredList = [...this.housingList];
    }else{
      this.filteredList = this.housingList.filter(h => h.type === type);
    }
  }

  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }
}
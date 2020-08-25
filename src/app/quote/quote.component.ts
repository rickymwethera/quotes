import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Nelson Mandela', 'Do not take advice from someone who has not been in your shoes.', 'admin', new Date(2019, 5, 10)),
    new Quote(2, 'Mahatma Gandhi', 'Do not judge me by my past, I do not live there anymore.', 'admin', new Date(2018, 3, 23)),
    new Quote(3, 'Ricky Gichuhi', 'Hard work always pays', 'admin', new Date(2019, 8, 17)),
  ]

  

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

     deleteQuote(isComplete, index) {
     if (isComplete) {
       let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

       if (toDelete) { this.quotes.splice(index, 1) }
     }
   }

   toggleQuote(index) {
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }



ngOnInit(): void {
}

}


 

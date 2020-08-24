import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Nelson Mandela', 'Do not take advice from someone who has not been in your shoes.', 'admin', new Date(1990, 5, 10)),
    new Quote(2, 'Mohandas Gandhi', 'Do not judge me by my past, I do not live there anymore.', 'admin', new Date(1950, 3, 23)),
    new Quote(3, 'Rick Flores', 'We have to come for them before they come for us, it is that simple', 'admin', new Date(2012, 8, 17)),
  ]

  showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}


 
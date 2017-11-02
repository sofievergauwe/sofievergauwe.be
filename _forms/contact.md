---
title: Contactformulier
name: contact
success: /bericht-verzonden
fields:
  - label: Volledige naam
    name: name
    required: true
    type: text
  - label: Email
    name: E-mail
    options:
      - optie 1
      - optie 2
      - optie 3
    required: true
    type: select
  - label: Bericht
    name: message
    required: true
    type: textarea
  - label: Verzenden
    name: submit
    type: submit
---


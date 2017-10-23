---
title: Afspraak maken
name: afspraak-maken
success: /verzonden
fields:
  - label: Volledige naam
    name: name
    required: true
    type: text
  - label: Email
    name: E-mail
    required: true
    type: email
  - label: Dag
    name: day
    options:
      - Maandag
      - Donderdag
      - Zaterdag
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


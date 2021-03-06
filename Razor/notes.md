# Notes Razortraining

## .NET en .NET Core geschiedenis

.NET Core 1.0
.NET Core 1.1
.NET Core 2.0
.NET Core 2.1
.NET Core 2.2
.NET Core 3.0

=>

.NET 5

after:2016

ASP.NET Core
- 2016
- Performance
- Deployment
- API

.NET Core
- 2016
- Linux/MacOS
- SQL Server op Linux
- 


.NET Framework
- 2001
- Windows
- Visual Studio + Windows + SQL Server

ASP.NET
- Webserver: IIS

ASP.NET MVC

## HTTP

### Formulierdata submitten naar server

HTTP-request

x-form-urlencoded

`brand=Samsung&size=485&price=24949`

### HTTP-statuscodessen

2xx - success
- 200 OK
- 201 Created
- 204 No Content  (DELETE)

3xx  REDIRECTS
- 301/302  permanent/temporary

4xx -  client error
- 400 Bad Request
- 401/403 Forbidden/Unauthorized
- 404 Not Found
- 405 Method Not Allowed  DELETE
- 418 I'm a teapot

5xx - server error
- 500 - Internal Server Error
- 502 Gateway

## HTML

HTML
- Structuur
- Inhoud

CSS
- Opmaak
- Kleurtjes animaties

JavaScript
- Interactie
- Gedrag

```html
<element>inhoud</element>
```

```html
h1
h2
h6
p
```

doelgroepen van een webpagina:

- "mensen met prima zicht"
- slechtzienden
- blinden
- zoekmachines



HTML 1.0 - 1991
     +
     2
     3
     4
     - 4.01 - 1998

HTML5 - 2013

`data-*` attributen voor custom metadata

### a11y

De meeste HTML-elementen zijn betekenisvol (semantisch), met twee uitzonderingen:

```html
<div></div>
<span></span>
```

Betekenisvol betekent meestal ook 👍 voor a11y.

* a11y - accessibility
* Web Components moeten extra moeite doen voor a11y:
	```html
	<jouw-sexy-element></jouw-sexy-element>
	```
  - WAI-Accessible Rich Internet Applications
  - WCAG - Web Content Accessibility Guidelines


### "deprecated" elementen

```html
<b> - bold
<i> - italic
<u> - underline

<center>
<font>
<blink>
```

## Dependency injection

- het injecteren van dependencies
- het is een vorm van Inversion of Control
- uitwisselbaar

low coupling, high cohesion




## Unittesten

Verschillende soorten geautomatiseerd testen:

- unittests
- integratietests
- end-to-end tests (UI tests)

overige testen:
- handmatige testen
- penetration testing


**MENING**

wanneer je in JP's ogen niet hoeft te unittesten:

- als je de stagiaire/tester alle tests laat schrijven
- als je x% code coverage probeert te halen
- als je project < 6 maanden duurt. let wel:

    "niets is zo permanent als een tijdelijke oplossing"

Verbeter de kwaliteit van je tests met [mutation testing](https://stryker-mutator.io/).

## EF Core

=> library/framework
=> Object-Relational Mapper
   - SQL
   - EF 6
   - [Dapper](https://github.com/DapperLib/Dapper) (beter qua performance)

NoSQL - MongoDB Cassandra Cosmos

* `DbContext` voor database
* `DbSet` voor tabel
* Migrations om database up-/downgrades uit te voeren

## Unittesten

- zo klein mogelijk stukje code testen
- mock dependencies weg

mockframeworks
- Moq
- NSubstitute


- mocha (javascript / node.js)
  - is een testrunner, niet voor mocking


.NET-testframeworks:
- MSTest
- xunit
- nunit

De verschillen? Subtiele detailsdingetjes.

```cs
// MSTest
[ExpectedException(ArgumentException)]
public void TestIets()
{

}

// xunit
public void XunitTest()
{
	Assert.Throws<ArgumentException>(() => page.Doe());
}
```

```cs
Assert.Equals("hoi", "hoi");
```
```
MSTest: "hoi" does not equal "hoi"

xunit: Two strings don't match
"hoi"
"hoi"
```


- integratietesten
  - "het grotere geheel"
  - database betrekken bij je test
  - API test
  - component

- UI test / end-to-end (E2E) testen
- handmatig testen


Kwaliteit checken van je tests: **[mutation testing]((https://stryker-mutator.io/))**
```cs
if (x == 24)
{
	...
}
```

X-Men
William Stryker

### Test-driven development

- Eerste een test
- Dan de code

1. Schrijf een test
2. Run de test en zie dat hij faalt
3. Schrijf code
4. Run de test en zie dat hij slaagt
5. Refactor

Repeat.

RED-GREEN-REFACTOR


## REST APIs

REpresentational State Transfer API

- Data teruggeven in het formaat dat de client wil: JSON/XML/...
- data losgekoppeld van UI
- flexibiliteit richting meerdere clients
- sinds 2000

minder dit:
```sh
GET index.php?action=delete_customer&id=14
```

en meer terug naar HTTP verbs zoals ze ooit bedoeld zijn:

* GET  	informatie ophalen
* POST  	informatie toevoegen
* PUT  	informatie wijzigen (update)
* DELETE	informatie verwijderen
* PATCH	informatie deels wijzigen

minder ideaal aan deze verbs: processen uitdrukken met deze verbs

alternatieven voor REST:

- SOAP
  => Web Service Definition Language
  => XML
  - omslachtig
  - "voelt niet heel webberig aan"

- GraphQL
  - niveau van detail
  - Meta

- gRPC
  - Efficient binair formaat
  - Grote hoeveelheden data (> 10MB)



ASP.NET Core 1.0 Newtonsoft.Json
ASP.NET Core 2.0 Newtonsoft.Json
ASP.NET Core 3.0 System.Text.Json - performance
ASP.NET Core 5.0 System.Text.Json 

### Verwant aan REST

* Swagger
  - API documentatie
  - SwaggerUI
    - UI vergelijkbaar met Postman/Insomnia om API requests te sturen
* recursiviteit
* opties instellen
* maturity levels, level 2 zitten de meeste projecten, level 3: Hypermedia As The Engine Of Application State
	```json
	{
		"brand": "Samsung",
		"size": 4,
		"links": [
			"details": "api/television/14/details"
		]
	}
	```

Lastige van REST APIs?
=> versionering

* /api/v1/televisions
* /api/televisions?v=1 // querystring parameter
* X-API-VERSION: 1; // exotische optie: custom HTTP header

## JavaScript

- taal
- in de browser (1996)
  => interactie, gedrag

- niet in de browser - Node.js (2009 => 2011)


- HTML-elementen
  - aanmaken
  - verwijderen
  - attributen aanpassen
  - tekst
- events
  - keypress keydown keyup
  - mousemove mouseover click dblclick
  - form submit
  - scroll

Taal:
- flexibel
- dynamisch

C#:
- star
- static  var getal = 13;


DOM
=> Document Object Model

### AJAX

=> Asynchronous JavaScript And XML (2005)
=> Asynchronous JavaScript And JSON  - AJAJ
   => bekt niet lekker. AJAX wel: Griekse held, voetbalclub

=> HTTP-berichtjes sturen vanuit JavaScript

```js
// oldskool manier
XMLHttpRequest (xhr)

// 2014
fetch()
```

CORS: Cross Origin Resource Sharing. De browser checkt of de server het goed vindt om van een ander domein berichten te ontvangen.

## Authenticatie/autorisatie

Ook wel: inloggen.

* identificatie: wie ben je
* authenticatie: bewijs dat jij dat bent
* autorisatie: wat mag je

n-factor authentication
two-factor authentication

iets wat je weet - username/password
iets wat je hebt - apparaatje (smartphone)

iets wat je bent - bloed iris vingerafdruk
=> vertrouw je de sensor? werkt hij uberhaupt
=> wat je bent kan je niet veranderen.

### History

ASP.NET 2.0 - 2005

- MembershipProvider
  - SqlMembershipProvider
  - SimpleMembershipProvider
  - UniversalProvider (Azure)

ASP.NET MVC 5 (2014)
- Identity Framework

ASP.NET Core
- Identity Framework


## State

Caching: het onthouden van dingen.
Sessions: het onthouden van gebruikersspecifieke dingen.


## Security (hacking)

- injecties
  => SQL

- Man-in-the-Middle
- phishing
  - voornamelijk mails
  - bellen
  - voorkomen? informeren, gebruikers bewust maken
  - herkennen?
    - domein
    - afzender    Simple MTP
    - taal
    - persoonlijk

- XSS - Cross Site Scripting
  - een hacker JavaScript in iemands browser uit kan voeren

  	hoi allemaal!

    ```html
    <script>window.location.href='https://evilsite.nl';</script>
    ```
	  - Reddit
	  - YouTube
	  - Wikipedia
	  - Alle forums
	  - dumpert

- XSRF - Cross Site Request Forgery
  => wanneer een hacker een gebruiker weet te overtuigen om een bepaalde request te maken

- Social engineering
  - Vaak fysiek
    => in pak / in werkkleding
    => deuren
  - Telefoontjes

mail:
```html
<img src="https://rabobank.nl/overboeken?van=24389459&naar=3945905&hoeveelheeid=9999999999999">
```

OWASP
- Top 10
- ASVS
- WebGoat
- Zed Attack Proxy



adresbalk: id=1 OR 1=1

// oud PHP
$sql = 'SELECT * FROM customer WHERE id = ' + $_GET['id'];
$result = mysql_query($sql);

// ORM: Entity Framework Core
await context.Customer.Where(x => x.Id == id).ToListAsync();

context.Database.ExecuteSqlRaw("...")


## HTTP

HTTP 1.1
- .css
- .js
- images

HTTP/2 SPDY
- "multiplexing" TCP-kanaal hergebruiken

HTTP/3 QUIC
- UDP


### Content Delivery Network

De browser stuurt maximaal zo'n 6-10 HTTP-requests naar dezelfde hostname 

belastingdienst.nl
s1.belastingdienst.nl
static22.facebook.com

cdnjs.com
=> jquery.js
- performance
- security is voor de meeste serieuze webapplicaties een reden om deze niet te gebruiken
- leuk voor hobbysites, wordpresssites, training

index.html
.css
.css
.js
.js
.js
.js
.js
.js
plaatjes
video

DDoS aanval

distributed denial of service


## Deployment

- Standalone
- Webserver (IIS, Apache, nginx)
  "reverse proxy"
- Azure
  - Visual Studio heeft een wizard: rechtermuisknop op project > Publish
- Docker
  - containers makan
  - opspinnen

### Docker

containerization of software.

* beheerder wil de software gewoon deployen, net als dat een schipkapitein goederen wil vervoeren
* geen gevoel hebben bij een specifieke deployment/container. Net als een zeecontainer, zit er een gat in? Andere container neerzetten, klaar.

vroeger: installatiehandleidingen
Ontwikkel-Test-FAT GAT PAT-Productie

Orchestration:
* docker-compose
* kubernetes
* dynamische schaalbaarheid: geautomatiseerde coordinatie van deployments

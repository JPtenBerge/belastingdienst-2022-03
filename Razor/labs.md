# Labs

Het wordt een todo-webapplicatie.

1. Maak een scherm die een overzicht van todos toont.
2. Voeg een formulier toe aan jullie pagina om nieuwe todos toe te voegen.
   => met validaties uiteraard.
3. Maak een repository die je pagina voorziet van de lijst van todos.
4. Unittest jullie applicatie. Kies maar of je de Get of Post wil testen. Mock je repository weg.
5. Maak een stuk middleware die alle 404's logt.
6. Maak er een meer volledige webapp van.
   * Maak een layout page om algemene HTML in op te nemen.
   * Gebruik een `_ViewStart` om algemene viewinstellingen vast te leggen (zoals de verwijzing naar de layout page)
   * Gebruik een `_ViewImports` om algemene viewimports vast te leggen (`using`s en `@addTagHelper`)
   * Maak je webpagina iets mooier/vriendelijker met CSS.
7. Maak een REST API om je todos vanaf op te halen en toe te voegen.
   * Test deze met een API testing tool (Postman, Imsomnia, VS Code REST Client, ...)
8. Integreer Swagger en Swagger UI bij jullie REST API.
9. Zet je huidige pagina om naar een JavaScript-versie.
   => niet je .cshtml weggooien, maak een nieuw .html-bestand en kopieer de HTML-output van je Razor Page.
10. GET en POST data van/naar je API vanaf de JavaScript-versie van je pagina.
11. Het wordt een familie-todo-app. Registreer wie een todo-item heeft toegevoegd.
   => terug naar je Razor Page.
12. Cache je todos bij je API.
   => kies wat je fijn vindt.
   => Redis: lokaal duurt dat nogal ff.
13. Als een ander familielid een todo-item toevoegt, moet dat direct zichtbaar zijn voor de overige familieleden.
   => vanaf je JS-pagina

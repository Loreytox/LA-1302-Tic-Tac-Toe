# LA-1302-Tic-Tac-Toe

Lorenzo Lai, Dorian Herzig, Cyril Lutziger, Marek von Rogall

| Datum | Version | Zusammenfassung |
| ---- | --------------- | ---- |
| 17.11.2023 | 0.0.1   | Heute haben wir angefangen, TicTacToe zu programmieren.|
| 24.11.2023 | 0.0.2   | Heute haben wir mit IPERKA angefangen.|
| 01.12.2023 | 0.0.3   | Heute haben wir den Grossteil des Codes fertiggestellt und sind fast mit dem Projekt fertig. |   
| 08.12.2023 | 1.0.0   | Heute haben wir den Code komplet fertiggestellt und fangen mit dem Mahara Portfolioeintrag an. |
| 15.12.2023 | 1.0.0   | Heute haben wir weiter am Portfolioeintrag gearbeitet. |
| 22.12.2023 | 1.0.0   | Heute waren wir schon fast mit allem fertig und haben mehr Pause gemacht. |
| 12.01.2024 | 1.0.0   | Wir haben das Projekt abgeschlossen. |

## 1 Informieren

### 1.1 Ihr Projekt

Wir haben ein Tic-Tac-Toe-Spiel in HTML, CSS und Javascript unter Verwendung von Visual Studio Code entwickelt.

In diesem Projekt haben wir ein interaktives Tic-Tac-Toe-Spiel erstellt, das es Benutzern ermöglicht, gegeneinander anzutreten. Wir haben uns für die Verwendung von Visual Studio Code entschieden, da es eine leistungsstarke Entwicklungsumgebung ist. Unser Ziel war es, eine unterhaltsame und benutzerfreundliche Anwendung zu schaffen, die Menschen dabei unterstützt, das klassische Tic-Tac-Toe-Spiel zu spielen und Spass zu haben.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |  Muss               |  Funktional    | Als User möchte ich, das Programm lokal mit einem Freund spielen. |
| 2    |  Muss               |  Qualität    | Als User möchte ich, dass das Programm eine grafische Benutzeroberfläche besitzt. |
| 3    |  Muss               |  Funktional    | Als User möchte ich, dass das Programm automatisch erkennt, ob ein Spieler gewonnen hat. |
| 4    |  Muss               |  Funktional    | Als User möchte ich, dass das Spiel eine Auswahl besitzt um den Startspieler festzulegen. |
| 5    |  Muss               |  Funktional    | Als User möchte ich, dass das Spiel die Spieler abwechselend an die Reihe nimmt. |
| 6    |  Können             |  Qualität      | Als User möchte ich, ein sauber gestaltetes Front-end. |

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Webseite wurde aufgerufen | "New Game" | TicTacToe wird gestartet. |
|3.1 |Aktueller Spieler O: "Spieler O kann diagonal gewinnen"|O |Spieler O hat gewonnen |
|3.2 |Aktueller Spieler O: "Niemand kann noch gewinnen" |O |Unentschieden! |
| 4.1  | Die Webseite wurde aufgerufen | Die Schaltfläche "Player X" wurde betätigt. | Player X begint mit dem Spiel. |
| 4.2  | Die Webseite wurde aufgerufen | Die Schaltfläche "Player O" wurde betätigt. | Player O begint mit dem Spiel. |
| 5.1  | Aktueller Spieler X: | X | Aktueller Spieler O: |

### 1.4 Diagramme

<img src="https://github.com/DorianHerzig9/L-schversion-1302/assets/110893394/30df35fa-1c83-4e29-b36d-032fc83a6867" width=30% height=30%>
<img src="https://github.com/DorianHerzig9/L-schversion-1302/assets/110893288/df0b1e8b-b7d3-4c6e-b8de-cbad52387336" width=50% height=50%>

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |   24.11.23    | Dorian | Informieren über lokales Zusammenspielen | 15' |
| 1.B  |   24.11.23    | Dorian/Marek | Implementieren | 45' |
| 1.C  |   24.11.23    | Marek/Cyril/Lorenzo/Dorian | Auswerten| 10' |
| 2.A  |   24.11.23    | Cyril/Marek | Informieren über die implementieren des Spielfeld-Rasters | 10' |
| 2.B  |   24.11.23    | Marek/Lorenzo | Implementieren | 60' |
| 2.C  |   01.12.23    | Marek/Cyril | Auswerten | 10' |
| 3.A  |   01.12.23    | Marek/Lorenzo/Cyril | Sieger erkennen informieren | 45' |
| 3.B  |   01.12.23    | Marek/Cyril | Implementieren | 120' |
| 3.C  |   01.12.23    | Cyril/Dorian | Auswerten | 60' |
| 4.A  |   08.12.23    | Dorian/Marek/Lorenzo | Auswahl Startspieler Informieren | 15'  |
| 4.B  |   08.12.23    | Marek/Dorian | Implementiern | 60' |
| 4.C  |   08.12.23    | Dorian/Lorenzo/Cyril | Auswerten | 20' |
| 5.A  |   12.01.24    | Marek/Dorian         | Abwechseln des Spielers informieren| 10'|
| 5.B  |   12.01.24    | Marek/Cyril         | Implementieren| 30'|
| 5.C  |   12.01.24    | Marek/Dorian/Lorenzo/Cyril         | Auswerten| 15'|

## 3 Entscheiden

Wir haben uns für die folgenden User Storys im Zusammenhang mit der Spiellogik entschieden, da sie sowohl für die Benutzererfahrung als auch für unsere Entwicklungsziele sinnvoll sind. Als Beispiel nehmen wir die Spiellogik: Diese wurde so implementiert, dass das Spiel reibungslos abläuft und die Regeln von Tic-Tac-Toe korrekt eingehalten werden. Eine klare und zuverlässige Spiellogik sorgt dafür, dass die Benutzer eine konsistente und unterhaltsame Spielerfahrung haben.

Die Implementierung der Spiellogik stellte eine anspruchsvolle Herausforderung dar, da die korrekte Handhabung von Spielerzügen, Gewinnbedingungen und Unentschieden eine präzise Umsetzung erforderte. Durch eine sorgfältige Entwicklung haben wir sichergestellt, dass das Spiel fair und verständlich ist, wodurch die Nutzerfreundlichkeit und Zufriedenheit maximiert werden.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |   24.11.23    | Dorian | 15' | 15' |
| 1.B  |   24.11.23    | Dorian/Marek | 45' | ~60' |
| 1.C  |   24.11.23    | Marek/Cyril/Lorenzo/Dorian | 10' | 20' |
| 2.A  |   24.11.23    | Cyril/Marek | 10'| 15' |
| 2.B  |   24.11.23    | Marek/Lorenzo | 60' | 80' |
| 2.C  |   01.12.23    | Marek/Cyril | 10' | 15' |
| 3.A  |   01.12.23    | Marek/Lorenzo/Cyril | 45' | ~60' |
| 3.B  |   01.12.23    | Marek/Cyril | 120' | ~160' |
| 3.C  |   01.12.23    | Cyril/Dorian | 60' | 60' |
| 4.A  |   08.12.23    | Dorian/Marek/Lorenzo | 15' | ~25'  |
| 4.B  |   08.12.23    | Marek/Dorian | 60' | ~100' |
| 4.C  |   08.12.23    | Dorian/Lorenzo/Cyril | 20' | 25' |
| 5.A  |   12.01.24    | Marek/Dorian         | 10' | 20'|
| 5.B  |   12.01.24    | Marek/Cyril         | 30' | ~100'|
| 5.C  |   12.01.24    | Marek/Dorian/Lorenzo/Cyril | 15' | ~30'|

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  24.11.23 |  OK  | Cyril / Marek / Lorenzo /Dorian |
| 3.1  |  01.12.23 |  OK  | Cyril / Marek / Lorenzo /Dorian |
| 3.2  |  01.12.23 |  OK  | Cyril / Marek / Lorenzo /Dorian |
| 4.1  |  08.12.23 |  OK  | Cyril / Marek / Lorenzo /Dorian |
| 4.2  |  08.12.23 |  OK  | Cyril / Marek / Lorenzo /Dorian |
| 5.1  |  12.01.24 |  OK  | Cyril / Marek / Lorenzo /Dorian |

Alles funktioniert und ist erfolgreich implementiert worden.

## 6 Auswerten

Was lief gut in unserem Projekt?
Wir konnten alles ziemlich schnell und nach Plan erledigen. Es gab keine wirklichen Schwierigkeiten. Was gut lief, war das schnelle und intensive Arbeiten am Projekt.

Was lief nicht gut in unserem Projekt?
Wir konnten das Projekt ohne schwerwiegende Probleme abschliessen.

Link zur Webanwendung: https://loreytox.github.io/LA-1302-Tic-Tac-Toe/

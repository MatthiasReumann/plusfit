var m = require("mithril")

module.exports = {
    view: function(){
        return m(".message", [
            m("h1", "Datenschutz"),
            m(".message-content", [
                m("p", `Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und sorgfältig nach dem Grundsatz von Treu und Glauben. Als gesetzliche Grundlagen dienen insbesondere die 
                Europäische Datenschutzgrundverordnung (EU-DSGVO), das Bundesdatenschutzgesetz (BDSG), 
                der Rundfunkstaatsvertrag (RStV) sowie das Telemediengesetz (TMG).`),
                m("p", `Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift, Telefonnummern oder E-Mail-Adressen) erhoben werden, erfolgt dies, 
                soweit möglich, stets auf freiwilliger Basis. Diese Daten werden nur dann und in dem Umfang genutzt, 
                insoweit sie für die Erbringung der jeweiligen Dienstleistung erforderlich sind. 
                Diese Daten geben wir ohne ihre ausdrückliche Zustimmung nicht an Dritte weiter.`),

                m("br"),
                m("b","Sicherheit"),
                m("br"),
                m("p", `Die Plus-Fit setzt technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre uns zur Verfügung 
                gestellten personenbezogenen Daten durch zufällige oder vorsätzliche Manipulation, Verlust, 
                Zerstörung oder den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen 
                werden entsprechend dem Stand der Technik fortlaufend verbessert und angepasst.`),
                m("p", `Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. 
                Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.`),

                m("br"),
                m("b","Cookies"),
                m("br"),
                m("p", `Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und 
                enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. 
                Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.`),
                m("p", `Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. 
                Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. 
                Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.`),
                m("p", `Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies 
                nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
                Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. 
                Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. `),

                m("br"),
                m("b","Kontaktformular"),
                m("br"),
                m("p", `Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.`),

                m("br"),
                m("b","Verarbeiten von Daten (Kunden- und Vertragsdaten)"),
                m("br"),
                m("p", `Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, 
                inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Personenbezogene Daten 
                über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, 
                verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.`),

                m("br"),
                m("b","Widerrufsrecht"),
                m("br"),
                m("p", `Sofern Sie auf unseren Seiten aufgefordert werden, 
                persönliche Informationen wie z.B. Name, Anschrift, E-Mail-Adresse oder Telefonnummer anzugeben, 
                unterliegt dies besonderen Bestimmungen, auf die Sie dort hingewiesen werden. Diese Einwilligungen können Sie jederzeit bei der Plus-Fit, 
                Tamara Hadamzig, Sonnenstr.7, 85746 Oberschleißheim, info@plus-fit.net, für die Zukunft widerrufen.`),

                m("br"),
                m("b","Datenübermittlung bei Vertragsschluss für Online- Shops, Händler und Warenversand"),
                m("br"),
                m("p", `Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist; 
                etwa an die mit der Lieferung der Ware betrauten Unternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. 
                Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich 
                zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.`),

                m("br"),
                m("b","Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitalen Inhalten"),
                m("br"),
                m("p", `Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, 
                etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
                Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. 
                Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.`),

                m("br"),
                m("b","Verschlüsselter Zahlungsverkehr auf dieser Webseite"),
                m("br"),
                m("p", `Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/Mastercard, Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte SSL-Verbindung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.`),

                m("br"),
                m("b","Auskunftsrecht"),
                m("br"),
                m("p", `Auf Anforderung teilen wir Ihnen möglichst umgehend schriftlich entsprechend des geltenden Rechts mit, 
                ob und welche persönlichen Daten über Sie bei uns gespeichert sind. Sollten trotz unserer 
                Bemühungen um Datenrichtigkeit und Aktualität falsche Informationen gespeichert sein, werden wir diese auf Ihre Aufforderung hin berichtigen.`),

                m("br"),
                m("b","Google Analytics"),
                m("br"),
                m("p", `Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 
                1600 Amphitheatre Parkway Mountain View, CA 94043, USA.
                Google Analytics verwendet so genannte “Cookies”. Das sind Textdateien, die auf Ihrem Computer gespeichert werden 
                und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen 
                über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.`),

                m("br"),
                m("b","Browser Plugin"),
                m("br"),
                m("p", `Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; 
                wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, 
                indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de`),

                m("br"),
                m("b","Widerspruch gegen Datenerfassung"),
                m("br"),
                m("p", `Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, 
                der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren
                Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de`),

                m("br"),
                m("b","Facebook- Plugins (Like-Button)"),
                m("br"),
                m("p", `Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. 
                Die Facebook- Plugins erkennen Sie an dem Facebook-Logo oder dem “Like-Button” (“Gefällt mir”) auf unserer Seite. 
                Eine Übersicht über die Facebook-Plugins finden Sie hier: https://developers.facebook.com/docs/plugins/.
                
                Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook “Like-Button” anklicken während Sie in Ihrem Facebook- Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. 
                Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter https://de-de.facebook.com/policy.php.    
                Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.`),

                m("br"),
                m("b","Facebook Pixel"),
                m("br"),
                m("p", `Unsere Webseite nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc. 1601 S. California Ave, Palo Alto, CA 94304, USA (“Facebook”).
                So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Webseite des Anbieters weitergeleitet wurden. 
                Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
                Die erhobenen Daten sind für uns als Betreiber dieser Webseite anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, 
                sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der Facebook- Datenverwendungsrichtlinie (https://www.facebook.com/about/privacy/) verwenden kann. 
                Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.
                In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre https://www.facebook.com/about/privacy/.
                Sie können außerdem die Remarketing- Funktion „Custom Audiences“ unter https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.
                Wenn Sie kein Facebook Konto besitzen können Sie nutzungsbasierte Werbung von Facebook auf der Webseite der European Interactive Digital Advertising Alliance deaktivieren: http://www.youronlinechoices.com/de/praferenzmanagement/`),

                m("br"),
                m("b","Instagram"),
                m("br"),
                m("p", `Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA integriert. Wenn Sie in Ihrem Instagram-Account 
                eingeloggt sind können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. 
                Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
                Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: https://instagram.com/about/legal/privacy/`),

                m("br"),
                m("b","Google Web Fonts"),
                m("br"),
                m("p", `Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. 
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. 
                Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
                Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von 
                Google: https://www.google.com/policies/privacy/`),

                m("br"),
                m("b","Google Maps"),
                m("br"),
                m("p", `Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, 
                CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server 
                von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://www.google.de/intl/de/policies/privacy/`),

                m("br"),
                m("b","YouTube"),
                m("br"),
                m("p", `Unsere Webseite nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, 
                wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem Youtube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
                Wenn Sie in Ihrem YouTube-Account eingeloggt sind ermöglichen Sie YouTube, 
                Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
                Weitere Informationen zum Umgang von Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: https://www.google.de/intl/de/policies/privacy`),

                m("br"),
                m("b","Registrierung auf dieser Webseite"),
                m("br"),
                m("p", `Sie können sich auf unserer Webseite registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. 
                Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich registriert haben.
                Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.
                Sie können diesem Angebot ebenfalls widersprechen oder diese Leistung widerrufen.`),

                m("br"),
                m("b","SSL-Verschlüsselung"),
                m("br"),
                m("p", `Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.`),

                m("br"),
                m("b","Ansprechpartner"),
                m("br"),
                m("p", `Für Fragen, Anträge oder Beschwerden zum Thema Datenschutz steht Ihnen unser Beauftragter für den Datenschutz gerne zur Verfügung:`),
                m("p",{class:"uk-margin-remove"},"Softwert GmbH"),
                m("p",{class:"uk-margin-remove"},"Dieter Told"),
                m("p",{class:"uk-margin-remove"},"Datenschutzbeauftragter"),
                m("p",{class:"uk-margin-remove"},"Landsberger Str. 408"),
                m("p",{class:"uk-margin-remove"},"81241 München"),
                m("p",{class:"uk-margin-remove"},"dsb@softwert.de"),

                m("br"),
                m("b","Widerspruch Werbe-Mails"),
                m("br"),
                m("p", `Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von 
                nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. 
                Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte 
                im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.`),
            ])
        ])
    }
}
import Image from 'next/image';
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Link from 'next/link';

export default function Page() {
    return (
        <div className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]">
            <Image
                src="/homepage-bg.png"
                alt="Homepage Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className="z-0"
            />
            <main className="p-6 relative z-10">
                <NavBar />
                <div className="bg-white rounded-xl shadow-xl p-5 mt-20">
                    <h1 className="text-2xl text-orange-600 font-bold mb-6">Datenschutzerklärung</h1>
                    <p className="text-md sm:text-sm">
                        Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten. Wir haben umfangreiche technische und betriebliche Schutzvorkehrungen getroffen, um Ihre Daten vor zufälligen oder vorsätzlichen Manipulationen, Verlust, Zerstörung oder dem Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsverfahren werden regelmäßig überprüft und dem technologischen Fortschritt angepasst.
                    </p>
                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">1. Verantwortlicher für die Datenverarbeitung</h2>
                    <p className='text-md sm:text-sm'>
                        Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist Ossara e.V., Papenreye 65, 22453 Hamburg, E-Mail: info[at]ossara.de.
                    </p>

                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">2. Ihre Rechte</h2>
                    <p className='text-md sm:text-sm'>
                        Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                    </p>
                    <h3 className="text-lg text-orange-400 font-bold mt-4 mb-1">2.1 Allgemeine Rechte</h3>
                    <p className='text-sm sm:text-xs'>
                        Sie haben ein Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und auf Datenübertragbarkeit. Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, haben Sie das Recht, diese uns gegenüber mit Wirkung für die Zukunft zu widerrufen.
                    </p>

                    <h3 className="text-lg text-orange-400 font-bold mt-4 mb-1">2.2 Rechte bei der Datenverarbeitung nach dem berechtigten Interesse</h3>
                    <p className="text-sm sm:text-xs">
                        Sie haben gem. Art. 21 Abs.1 DSGVO das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs.1 e DSGVO (Datenverarbeitung im öffentlichen Interesse) oder aufgrund Artikel 6 Abs.1 f DSGVO (Datenverarbeitung zur Wahrung eines berechtigten Interesses) erfolgt, Widerspruch einzulegen, dies gilt auch für ein auf diese Vorschrift gestütztes Profiling. Im Falle Ihres Widerspruchs verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                    </p>

                    <h3 className="text-lg text-orange-400 font-bold mt-4 mb-1">2.3 Rechte bei Direktwerbung</h3>
                    <p className="text-sm sm:text-xs">
                        Sofern wir Ihre personenbezogenen Daten verarbeiten, um Direktwerbung zu betreiben, so haben Sie gem. Art. 21 Abs. 2 DSGVO das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen, dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.<br />
                        Im Falle Ihres Widerspruchs gegen die Verarbeitung zum Zwecke der Direktwerbung werden wir Ihre personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.

                    </p>

                    <h3 className="text-lg text-orange-400 font-bold mt-4 mb-1">2.4 Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
                    <p className="text-sm sm:text-xs">
                        Sie haben zudem das Recht, sich bei einer zuständigen Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                    </p>

                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">3. Erhebung personenbezogener Daten bei Besuch unserer Website</h2>
                    <p className="text-md sm:text-sm">
                        Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Rechtsgrundlage dafür ist Art. 6 Abs. 1 f DSGVO:
                        <br />
                        - IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time (GMT), Inhalt der Anforderung (konkrete Seite), Zugriffsstatus/HTTP-Statuscode, jeweils übertragene Datenmenge, Website, von der die Anforderung kommt, Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware.
                    </p>

                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">4. Kontaktaufnahme per E-Mail oder Kontaktformular</h2>
                    <p className="text-md sm:text-sm">
                        Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Soweit wir über unser Kontaktformular Eingaben abfragen, die nicht für eine Kontaktaufnahme erforderlich sind, haben wir diese stets als optional gekennzeichnet. Diese Angaben dienen uns zur Konkretisierung Ihrer Anfrage und zur verbesserten Abwicklung Ihres Anliegens. Eine Mitteilung dieser Angaben erfolgt ausdrücklich auf freiwilliger Basis und mit Ihrer Einwilligung, Art. 6 Abs.1 a DSGVO. Soweit es sich hierbei um Angaben zu Kommunikationskanälen (beispielsweise E-Mail-Adresse, Telefonnummer) handelt, willigen Sie außerdem ein, dass wir Sie ggf. auch über diesen Kommunikationskanal kontaktieren, um Ihr Anliegen zu beantworten. Diese Einwilligung können Sie selbstverständlich jederzeit für die Zukunft widerrufen. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
                    </p>

                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">5. Newsletter</h2>
                    <p className="text-md sm:text-sm">
                        Mit Ihrer Einwilligung nach Art. 6 Abs. 1 a DSGVO können Sie unseren Newsletter abonnieren, mit dem wir Sie über unsere aktuellen Angebote informieren. Wir verwenden Brevo als unsere Marketing-Plattform. Wenn Sie das Formular ausfüllen und absenden, bestätigen Sie, dass die von Ihnen angegebenen Informationen an Brevo zur Bearbeitung gemäß den {" "}
                        <Link
                            href="https://cloud.hamburg.global/index.php/apps/forms/s/j7kFXRTtALSMM4DfEEJt6Faa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 font-semibold"
                        >
                            Nutzungsbedingungen
                        </Link>{" "} übertragen werden.
                        <br />
                        Für die Anmeldung zu unserem Newsletter verwenden wir das sog. Double-opt-in-Verfahren. Das heißt, dass wir Ihnen nach Ihrer Anmeldung eine E-Mail an die angegebene E-Mail-Adresse senden, in welcher wir Sie um Bestätigung bitten, dass Sie den Versand des Newsletters wünschen. Wenn Sie Ihre Anmeldung nicht innerhalb von [24 Stunden] bestätigen, werden Ihre Informationen gesperrt und nach einem Monat automatisch gelöscht.
                        <br />
                        Darüber hinaus speichern wir jeweils Ihre eingesetzten IP-Adressen und Zeitpunkte der Anmeldung und Bestätigung. Zweck des Verfahrens ist, Ihre Anmeldung nachweisen und ggf. einen möglichen Missbrauch Ihrer persönlichen Daten aufklären zu können.
                        <br />
                        Pflichtangabe für die Übersendung des Newsletters ist allein Ihr Vorname, Name und Ihre E-Mail-Adresse. Nach Ihrer Bestätigung speichern wir Ihre E-Mail-Adresse zum Zweck der Zusendung des Newsletters. Rechtsgrundlage ist Art. 6 Abs. 1 a DSGVO.
                        <br />
                        Ihre Einwilligung in die Übersendung des Newsletters können Sie jederzeit widerrufen und den Newsletter abbestellen. Den Widerruf können Sie durch Klick, auf den in jeder Newsletter-E-Mail bereitgestellten Link erklären.
                    </p>

                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">6. Datenbanknutzung</h2>
                    <p className='text-md sm:text-sm'>
                        Sie haben die Möglichkeit, sich bei uns in die Datenbank eintragen zu lassen. Für die Registrierung erheben und speichern wir von Ihnen folgende Personendaten:
                        - Vorname
                        - Nachname
                        - E-Mail

                        Wir verwenden für die Registrierung das sog. Confirmed-Opt-in-Verfahren, d. h. Sie erhalten eine Bestätigungsmail, die Sie über Ihren Eintrag in die Datenbank informiert. Die Angabe der zuvor genannten Daten ist verpflichtend, alle weiteren Informationen können Sie freiwillig bereitstellen.
                        <br />
                        Wenn Sie unsere Datenbank nutzen, speichern wir Ihre zur Vertragserfüllung erforderlichen Daten, bis Sie Ihren Zugang endgültig löschen lassen. Weiterhin speichern wir die von Ihnen angegebenen freiwilligen Daten für die Zeit Ihrer Nutzung der Datenbank, soweit Sie diese nicht zuvor löschen lassen. Rechtsgrundlage ist Art. 6 Abs. 1 a, b und f DSGVO.
                    </p>

                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">7. Einsatz von Social-Plugins</h2>
                    <p className="text-md sm:text-sm">
                        Diese Website verwendet Social-Plugins des/der Facebook, Instagram und YouTube.<br />
                        - Facebook (Betreiber: Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA)<br />
                        - Instagram (Betreiber: Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland)<br />
                        - Youtube (Betreiber: YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA)<br />
                        Diese Plugins erfassen normalerweise standardmäßig Daten von Ihnen und übermitteln diese an die Server des jeweiligen Anbieters. Um den Schutz Ihrer Privatsphäre zu gewährleisten, haben wir technische Maßnahmen ergriffen, die gewährleisten, dass Ihre Daten nicht ohne Ihre Zustimmung von den Anbietern des jeweiligen Plugins erfasst werden können. Bei Aufruf einer Seite, auf denen die Plugins eingebunden sind, sind diese zunächst deaktiviert. Erst mit einem Klick auf das jeweilige Symbol werden die Plugins aktiviert und Sie geben damit Ihre Zustimmung, dass Ihre Daten an den jeweiligen Anbieter übertragen werden. Rechtsgrundlage für die Nutzung der Plugins ist Art. 6 Abs. 1 a und f DSGVO.
                    </p>
                    <p className='text-md sm:text-sm break-words'>
                        Die Plugins erfassen nach Aktivierung auch personenbezogene Daten wie Ihre IP-Adresse und senden diese an die Server des jeweiligen Anbieters, wo diese gespeichert werden. Außerdem setzen aktivierte Social Plugins beim Aufruf der betreffenden Webseite ein Cookie mit einer eindeutigen Kennung. Dadurch können die Anbieter auch Profile über Ihr Nutzungsverhalten erstellen. Dies geschieht auch dann, wenn Sie nicht Mitglied bei dem sozialen Netzwerk des jeweiligen Anbieters sind. Sollten Sie Mitglied bei dem sozialen Netzwerk des Anbieters sein und sind Sie während Ihres Besuchs auf dieser Website bei dem sozialen Netzwerk eingeloggt, können Ihre Daten und Informationen über den Besuch auf dieser Webseite mit Ihrem Profil auf dem sozialen Netzwerk verknüpft werden. Auf den genauen Umfang der von Ihnen erhobenen Daten durch den jeweiligen Anbieter haben wir keinen Einfluss. Nähere Informationen über den Umfang, die Art und den Zweck der Datenverarbeitung und über Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen Anbieters des sozialen Netzwerks. Diese sind unter den folgenden Adressen abrufbar: <br /><br />
                        Facebook: <Link
                            href="https://cloud.hamburg.global/index.php/apps/forms/s/j7kFXRTtALSMM4DfEEJt6Faa"
                            target="_blank" rel="noopener noreferrer" className="text-orange-300 font-semibold break-all"
                        >https://www.facebook.com/policy/</Link><br /><br />
                        Instagram: <Link
                            href="https://cloud.hamburg.global/index.php/apps/forms/s/j7kFXRTtALSMM4DfEEJt6Faa"
                            target="_blank" rel="noopener noreferrer" className="text-orange-300 font-semibold break-all"
                        >https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect</Link><br /><br />
                        Youtube: <Link
                            href="https://cloud.hamburg.global/index.php/apps/forms/s/j7kFXRTtALSMM4DfEEJt6Faa"
                            target="_blank" rel="noopener noreferrer" className="text-orange-300 font-semibold break-all"
                        >https://policies.google.com/privacy?hl=de&gl=de</Link>
                    </p>
                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">8. YouTube</h2>
                    <p className="text-md sm:text-sm">
                        Wir setzen auf unserer Website Dienste von YouTube, LLC, 901 Cherry Ave., 94066 San Bruno, CA, USA, einer Tochtergesellschaft der Google Inc., Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Bei Nutzern, die ihren gewöhnlichen Aufenthalt im Europäischen Wirtschaftsraum oder der Schweiz haben, ist Google Ireland Limited (Google), Gordon House, Barrow Street, Dublin 4, Irland die für Ihre Daten zuständige Verantwortliche.
                        Hierbei nutzen wir zum Schutz Ihrer personenbezogenen Daten die von YouTube zur Verfügung gestellte Option des erweiterten Datenschutzes. Wenn Sie eine Seite aufrufen, in der ein YouTube-Video eingebettet ist, wird eine Verbindung zu den YouTube-Servern hergestellt und dabei der Inhalt durch Mitteilung an Ihren Browser auf der Internetseite dargestellt. Laut den Angaben von YouTube werden im [erweiterten Datenschutzmodus] jedoch nur dann Daten an den YouTube-Server übermittelt, wenn Sie das Video aktiv starten. Sofern Sie in diesem Zeitpunkt bei YouTube eingeloggt sind, werden die Informationen zu den von Ihnen angesehenen Videos Ihrem Mitgliedskonto bei YouTube zugeordnet. Sie können dies verhindern, indem Sie sich vor dem Besuch unserer Website von Ihrem Mitgliedskonto abmelden.
                        <br />
                        Soweit Daten außerhalb der EU/des EWR verarbeitet werden, hat sich Google LLC nach dem Data Privacy Framework (DPF) Programm zertifiziert und wird in der Data Privacy Framework Liste der International Trade Administration (ITA) geführt. Das bedeutet, dass sich Google LLC öffentlich zur Einhaltung der DPF-Pflichten verpflichtet hat und ein etwaiger Datentransfer in die USA aufgrund des aktuellen Angemessenheitsbeschlusses der Europäischen Kommission vom 10. Juli 2023 unbedenklich ist.
                        <br />
                        Weitere Informationen zum Datenschutz von YouTube werden von Google hier bereitgestellt.
                    </p>
                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">9. Einsatz von Cookies</h2>
                    <p className="text-md sm:text-sm">
                        Auf unserer Website verwenden wir keine Cookies. Das bedeutet, dass beim Besuch unserer Seite keine Informationen auf unseren Gerät gespeichert werden, die Ihr Nutzerverhalten verfolgen oder analysieren könnten.
                    </p>
                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">10. Webseitenanalyse</h2>
                    <p className="text-md sm:text-sm">
                        Unsere Website erfasst keine Nutzerdaten durch Cookies oder Analysetools Dritter. Das bedeutet, dass wir keine Informationen über Ihr Surfverhalten, Ihre IP-Adresse oder andere persönliche Daten sammeln, die von externen Dienstleistern verarbeitet werden könnten.
                    </p>
                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">11. Datenübermittlung</h2>
                    <p className="text-md sm:text-sm">
                        Eine Übermittlung Ihrer Daten an Dritte findet grundsätzlich nicht statt, es sei denn, wir sind gesetzlich dazu verpflichtet, oder die Datenweitergabe ist zur Durchführung des Vertragsverhältnisses erforderlich oder Sie haben zuvor ausdrücklich in die Weitergabe Ihrer Daten eingewilligt.
                        <br />
                        Wir legen Wert darauf, Ihre Daten innerhalb der EU / des EWR zu verarbeiten. Es kann allerdings vorkommen, dass wir Dienstleister einsetzen, die außerhalb der EU / des EWR Daten verarbeiten. In diesen Fällen stellen wir sicher, dass vor der Übermittlung Ihrer personenbezogenen Daten ein angemessenes Datenschutzniveau beim Empfänger hergestellt wird. Damit ist gemeint, dass einen Angemessenheitsbeschluss, wie das Data Privacy Framework zwischen EU und USA, oder über EU-Standarddatenschutzklauseln, ein Datenschutzniveau erreicht wird, dass mit den Standards innerhalb der EU vergleichbar ist.
                    </p>
                    <h2 className="text-xl text-orange-600 font-bold mt-6 mb-2">12. Datensicherheit</h2>
                    <p className="text-md sm:text-sm">
                        Wir haben umfangreiche technische und betriebliche Schutzvorkehrungen getroffen, um Ihre Daten vor zufälligen oder vorsätzlichen Manipulationen, Verlust, Zerstörung oder dem Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsverfahren werden regelmäßig überprüft und dem technologischen Fortschritt angepasst.
                    </p>
                </div>
                <Footer />
            </main>
        </div>
    );
}

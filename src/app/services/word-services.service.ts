import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordServicesService {

  constructor() { }

  words  = [
        {
            "English": "Gathered",
            "French": "Rassembler"
        },
        {
            "English": "Zen",
            "Meaning": "Type of"
        },
        {
            "English": "Sprol",
            "French": "Etalement"
        },
        {
            "English": "Mats",
            "French": "Tapis"
        },
        {
            "English": "Inscrutable",
            "French": "Vague"
        },
        {
            "English": "Respite",
            "French": "Répit",
            "Arabic": "استراحة"
        },
        {
            "English": "Steam",
            "French": "Vapeur"
        },
        {
            "English": "Tugging",
            "French": "tirer",
            "Meaning": "pull"
        },
        {
            "English": "Drastically",
            "French": "Considerablement"
        },
        {
            "English": "Narrow",
            "French": "Rétricit",
            "Arabic": "ضيق"
        },
        {
            "English": "bust",
            "French": "Failllite"
        },
        {
            "English": "Mastery",
            "French": "Maitrise"
        },
        {
            "English": "Fog",
            "French": "Brouillard"
        },
        {
            "English": "Tear",
            "French": "Dechirer"
        },
        {
            "English": "Widesom",
            "French": "Sagesse"
        },
        {
            "English": "Workaholism",
            "French": "Bourreaux"
        },
        {
            "English": "Shift",
            "French": "Décalage"
        },
        {
            "English": "Disruptive",
            "French": "Perturbatrice"
        },
        {
            "English": "Punchy",
            "French": "Dynamique"
        },
        {
            "English": "Belabor",
            "French": "Invectiver",
            "Meaning": "to explain something more than necessary"
        },
        {
            "English": "Subtle",
            "French": "Subtil",
            "Arabic": "رقيق"
        },
        {
            "English": "Insight",
            "French": "Perspicacité",
            "Arabic": "فطنة"
        },
        {
            "English": "Spawn",
            "French": "Frayer",
            "Meaning": "the eggs of fish"
        },
        {
            "English": "Ovation",
            "French": "Ovation",
            "Arabic": "تصفيق"
        },
        {
            "English": "Stamp",
            "French": "Timbre"
        },
        {
            "English": "Appeal",
            "French": "Attirer"
        },
        {
            "English": "Lionize",
            "French": "Celebrer"
        },
        {
            "English": "Cling",
            "French": "Cramponner",
            "Arabic": "تشبث"
        },
        {
            "English": "Ubiquity",
            "French": "Partout",
            "Meaning": "the fact that something or someone seems to be everywhere:"
        },
        {
            "English": "Cubicle",
            "French": "Cabine"
        },
        {
            "English": "Purr",
            "French": "ranronner",
            "Arabic": "خرخرة"
        },
        {
            "English": "Peddle",
            "French": "Colporter",
            "Arabic": "باع متجولا",
            "Meaning": "to sell things, especially by taking them to different places"
        },
        {
            "English": "Counselor",
            "French": "Conseiller"
        },
        {
            "English": "Lurking",
            "French": "Cachette",
            "Arabic": "اختباء"
        },
        {
            "English": "Unsetling ",
            "French": "Troublant"
        },
        {
            "English": "Pegged",
            "French": "Chevillé",
            "Arabic": "مربوط"
        },
        {
            "English": "scrounge",
            "French": "Emprunter"
        },
        {
            "English": "paupre",
            "French": "pauvre"
        },
        {
            "English": "dubbed",
            "French": "doublé",
            "Arabic": "مدبلجة"
        },
        {
            "English": "Stumble",
            "French": "Trébucher",
            "Arabic": "تعثر",
            "Meaning": "to step awkwardly while walking or running and fall or begin to fall"
        },
        {
            "English": "barefoot",
            "French": "pieds nues"
        },
        {
            "English": "Stick ",
            "French": "enfoncer;coller",
            "Meaning": "to cause something to become fixed, for example with glue or another similar substance"
        },
        {
            "English": "Shaping",
            "French": "Faconner",
            "Arabic": "تشكل"
        },
        {
            "English": "diving",
            "French": "plongé"
        },
        {
            "English": "compelling",
            "French": "Irrestible"
        },
        {
            "English": "Emphasize",
            "French": "Souligner"
        },
        {
            "English": "Uplifting",
            "French": "réjouissant",
            "Arabic": "النهضة"
        },
        {
            "English": "Barn",
            "French": "Grange",
            "Arabic": "إسطبل"
        },
        {
            "English": "Basked",
            "French": "Chauffé",
            "Arabic": "تشمس"
        },
        {
            "English": "Assumption",
            "French": "Supposition"
        },
        {
            "English": "Surveyed",
            "French": "interrogé"
        },
        {
            "English": "Roughly",
            "French": "Grossièrement",
            "Arabic": "بقسوة",
            "Meaning": "Harshly"
        },
        {
            "English": "Exalted",
            "French": "Exalté",
            "Arabic": "ممجد"
        },
        {
            "English": "Arguably",
            "French": "Discutablement"
        },
        {
            "English": "Agnotistic",
            "French": "Agnostique",
            "Arabic": "محايد"
        },
        {
            "English": "Steady",
            "French": "Stable"
        },
        {
            "English": "Flawed",
            "French": "Defectueux"
        },
        {
            "English": "adrift",
            "French": "à la derive",
            "Arabic": "بلا هدف",
            "Meaning": "If a person is adrift, they do not have a clear purpose in life or know what they want to do"
        },
        {
            "English": "Glernorous",
            "French": "Splendide;charmant"
        },
        {
            "English": "Riddle",
            "French": "Enigme"
        },
        {
            "English": "Thorny",
            "French": "Epineux",
            "Arabic": "شائك"
        },
        {
            "English": "underbrush",
            "French": "sous-bois"
        },
        {
            "English": "Suburb",
            "French": "Banlieu"
        },
        {
            "English": "Careworn",
            "French": "Anxious"
        },
        {
            "English": "Blended",
            "French": "Mélangé"
        },
        {
            "English": "Tidy",
            "French": "rangé"
        },
        {
            "English": "eccentric",
            "French": "Bizzare",
            "Meaning": "strange or unusual"
        },
        {
            "English": "Peeling",
            "Arabic": "تقشير",
            "Meaning": "to remove the skin of fruit and vegetables:"
        },
        {
            "English": "Leather",
            "French": "Cuir"
        },
        {
            "English": "Recliner",
            "French": "Fauteuil inclinable"
        },
        {
            "English": "Porch",
            "French": "terrace"
        },
        {
            "English": "Bud",
            "French": "bourgeon",
            "Arabic": "برعم"
        },
        {
            "English": "Litter",
            "French": "Litiere",
            "Arabic": "قمامة"
        },
        {
            "English": "waved",
            "French": "Saluer"
        },
        {
            "English": "Beat",
            "French": "Frapper"
        },
        {
            "English": "Praise",
            "French": "Louange",
            "Arabic": "مديح"
        },
        {
            "English": "Stammer",
            "French": "Balbutier",
            "Arabic": "تأتأة"
        },
        {
            "English": "sporadic",
            "French": "sporadique",
            "Arabic": "متقطع"
        },
        {
            "English": "Gasp",
            "French": "Haleter",
            "Arabic": "لهث"
        },
        {
            "English": "pace",
            "French": "rythme"
        },
        {
            "English": "Slip Away",
            "French": "s'éclipser",
            "Meaning": "to leave secretly"
        },
        {
            "English": "span",
            "French": "couvrir"
        },
        {
            "English": "stardom",
            "French": "Celebrité"
        },
        {
            "English": "Bow",
            "French": "Arc"
        },
        {
            "English": "Cohere",
            "French": "Adherer"
        },
        {
            "English": "Dash",
            "French": "Precepiter"
        },
        {
            "English": "Axiom",
            "French": "Axiome",
            "Arabic": "بديهية",
            "Meaning": "General truth"
        },
        {
            "English": "Winding down",
            "French": "Se detendre"
        },
        {
            "English": "Grasped",
            "French": "Saisi",
            "Arabic": "مقبوض"
        },
        {
            "English": "Struck",
            "French": "Frappé"
        },
        {
            "English": "Strike",
            "French": "Greve"
        },
        {
            "English": "Furnished",
            "French": "Meublé"
        },
        {
            "English": "Cynical",
            "French": "Cynique",
            "Arabic": "ساخر"
        },
        {
            "English": "Stripe",
            "French": "Bande",
            "Arabic": "شريط"
        },
        {
            "English": "Trump",
            "French": "Atout",
            "Arabic": "ورقة رابحة"
        },
        {
            "English": "Adage",
            "French": "Proverb"
        },
        {
            "English": "livelihood",
            "French": "subsistance",
            "Arabic": "الرزق"
        },
        {
            "English": "Thrive",
            "French": "prospérer",
            "Arabic": "النماء"
        },
        {
            "English": "Debunked",
            "French": "Démystifié",
            "Arabic": "فضحت"
        },
        {
            "English": "endorse",
            "French": "Approuver"
        },
        {
            "English": "premise",
            "French": "prémisse",
            "Arabic": "فرضية"
        },
        {
            "English": "Swamp",
            "French": "Marais",
            "Arabic": "مستنقع"
        },
        {
            "English": "Grind",
            "French": "Broyer",
            "Arabic": "طحن"
        },
        {
            "English": "Viable",
            "French": "Viable",
            "Arabic": "قابل للحياة"
        },
        {
            "English": "Trait",
            "French": "Caractere"
        },
        {
            "English": "Leap",
            "French": "Sauter"
        },
        {
            "English": "Crispness",
            "French": "Croustillant",
            "Arabic": "هشاشة"
        },
        {
            "English": "Relentless",
            "French": "Implacable",
            "Arabic": "متصلب الراي",
            "Meaning": "continuing in a severe or extreme way:"
        },
        {
            "English": "Enrolled",
            "French": "Inscrit"
        },
        {
            "English": "Enthral",
            "French": "Captiver",
            "Arabic": "فتن",
            "Meaning": "to keep someone completely interested"
        },
        {
            "English": "Overdue",
            "French": "Retardé"
        },
        {
            "English": "Crumble",
            "French": "Émietter",
            "Arabic": "تنهار",
            "Meaning": "to break, or cause something to break, into small pieces:"
        },
        {
            "English": "Gambles",
            "French": "Paris",
            "Arabic": "يقامر"
        },
        {
            "English": "strip away",
            "French": "dépouiller",
            "Arabic": "تجريد بعيدا",
            "Meaning": "to gradually reduce something important or something that has existed for a long time"
        },
        {
            "English": "Proponent",
            "French": "Partisan",
            "Arabic": "مؤيد"
        },
        {
            "English": "Leverage",
            "French": "Influence"
        },
        {
            "English": "Fleeing",
            "French": "Fuite"
        },
        {
            "English": "Abundance",
            "French": "Abondance",
            "Arabic": "وفرة"
        },
        {
            "English": "Vivid",
            "French": "Vif"
        },
        {
            "English": "Fiercely",
            "French": "Violemment"
        },
        {
            "English": "Thrilling",
            "French": "Palpitant",
            "Arabic": "مثير"
        },
        {
            "English": "innate",
            "French": "Inné",
            "Arabic": "فطري"
        },
        {
            "English": "Suck up",
            "French": "Aspirer"
        },
        {
            "English": "Thwart",
            "French": "Contrecarrer",
            "Arabic": "إحباط"
        },
        {
            "English": "Plenty",
            "French": "Beaucoup"
        },
        {
            "English": "Glimpse",
            "French": "Apercu"
        },
        {
            "English": "Unfold",
            "French": "se dérouler"
        },
        {
            "English": "Veteran",
            "French": "Vétéran",
            "Arabic": "مخضرم",
            "Meaning": "a person who has had a lot of experience of a particular activity:"
        },
        {
            "English": "Subpar",
            "French": "Subpar",
            "Arabic": "بشكل متدني",
            "Meaning": "used to describe something that is below average, or below what is expected:"
        },
        {
            "English": "Daunting",
            "French": "Intimidant",
            "Arabic": "ترهب، تخوف",
            "Meaning": "making you feel slightly frightened or worried about your ability to achieve something:"
        },
        {
            "English": "Staggering",
            "French": "Pharamineux",
            "Arabic": "مدهش",
            "Meaning": "very shocking and surprising:"
        },
        {
            "English": "Intricate",
            "French": "Complexe"
        },
        {
            "English": "Catered",
            "French": "Traiteur"
        },
        {
            "English": "Airtight",
            "French": "Hermitique",
            "Arabic": "محكم",
            "Meaning": "completely closed so that no air can get in or out:"
        },
        {
            "English": "Stir",
            "French": "Inciter;Remuer",
            "Arabic": "حرك",
            "Meaning": "to wake up or begin to move or take action:"
        },
        {
            "English": "Polished",
            "French": "Brillant"
        },
        {
            "English": "Rewired",
            "French": "Recablé"
        },
        {
            "English": "honing",
            "French": "Perfectionner",
            "Arabic": "صقل"
        },
        {
            "English": "Craft",
            "French": "Metier"
        },
        {
            "English": "Triumph",
            "French": "Triomphe"
        },
        {
            "English": "Setback",
            "French": "Revers;Echec",
            "Arabic": "نكسة"
        },
        {
            "English": "Cooling",
            "French": "Froidement"
        },
        {
            "English": "Assess",
            "French": "Evaluer"
        },
        {
            "English": "Lack",
            "French": "Manque"
        },
        {
            "English": "Dean",
            "French": "Doyen"
        },
        {
            "English": "Covet",
            "French": "Convoiter",
            "Arabic": "إشتهى ملك غيره",
            "Meaning": "to want to have something very much, especially something that belongs to someone else:"
        },
        {
            "English": "Wonk",
            "French": "Hardworker",
            "Meaning": "a person who works or studies too much, especially someone who learns and knows all the details about something"
        },
        {
            "English": "Deemed",
            "French": "Reputé"
        },
        {
            "English": "Sour",
            "French": "Acidé"
        },
        {
            "English": "Hunkering down",
            "French": "s'accroupir",
            "Arabic": "تمسك"
        },
        {
            "English": "Leveraged",
            "Arabic": "رافعة مالية",
            "Meaning": "used to describe an investment which has been bought with a large amount of borrowed money"
        },
        {
            "English": "Thus",
            "French": "Donc"
        },
        {
            "English": "Allot",
            "French": "Attribuer"
        },
        {
            "English": "Gravegard",
            "French": "Cimetiere"
        },
        {
            "English": "Strum",
            "French": "gratter"
        },
        {
            "English": "Reluctantly",
            "French": "À contrecœur",
            "Meaning": "in a way that shows that you are not willing to do something and are therefore slow to do it:"
        },
        {
            "English": "Glancing",
            "French": "Regarder"
        },
        {
            "English": "Liability",
            "French": "Responsabilité"
        },
        {
            "English": "Threshold",
            "French": "Seuil"
        },
        {
            "English": "Gasping",
            "French": "Haletemment",
            "Arabic": "يلهت"
        },
        {
            "English": "Dust",
            "French": "Poussiere"
        },
        {
            "English": "Freakish",
            "French": "Bizarre"
        },
        {
            "English": "Plateaued",
            "French": "se stabiliser"
        },
        {
            "English": "Exibit",
            "French": "Exposer"
        },
        {
            "English": "Startled",
            "French": "surpris"
        },
        {
            "English": "Feat",
            "French": "Exploit"
        },
        {
            "English": "Dissected",
            "French": "Disséqué;Anatomie",
            "Arabic": "تشريح"
        },
        {
            "English": "Scrutiny",
            "French": "Examen minutieux",
            "Arabic": "تدقيق",
            "Meaning": "the careful and detailed examination of something in order to get information about it:"
        },
        {
            "English": "notoriously",
            "French": "Notoirement",
            "Arabic": "بشكل ملاحظ"
        },
        {
            "English": "Reluctant",
            "French": "Reticent",
            "Arabic": "ممانع"
        },
        {
            "English": "Crave",
            "French": "désirer ardemment",
            "Arabic": "يريد بشدة",
            "Meaning": "to have a very strong feeling of wanting something:"
        },
        {
            "English": "Hustled",
            "French": "Boulversé"
        },
        {
            "English": "Epitome",
            "French": "Exemple"
        },
        {
            "English": "Ruthless",
            "French": "Impitoyable"
        },
        {
            "English": "Sporadically",
            "French": "De façon sporadiqueبشكل متقطع",
            "Meaning": "sometimes, but not regularly or continuously:"
        },
        {
            "English": "Impede",
            "French": "Empeche"
        },
        {
            "English": "Commute",
            "French": "faire la navette"
        },
        {
            "English": "Sake",
            "French": "Saké;benefice",
            "Arabic": "مصلحة",
            "Meaning": "in order to help or bring advantage to someone:"
        },
        {
            "English": "Clumsy",
            "French": "Maladroit",
            "Arabic": "اخرق"
        },
        {
            "English": "Broad",
            "French": "Vaste"
        },
        {
            "English": "Freight",
            "French": "Cargaison"
        },
        {
            "English": "Realm",
            "French": "Domaine"
        },
        {
            "English": "Strain",
            "French": "Tension;souche",
            "Meaning": "a force or influence that stretches, pulls, or puts pressure on something, sometimes causing damage:"
        },
        {
            "English": "Stuck",
            "French": "Coincé"
        },
        {
            "English": "Rehearsal",
            "French": "Répition",
            "Meaning": "a time when all the people involved in a play, dance, etc. practise in order to prepare for a performance"
        },
        {
            "English": "Flawless",
            "French": "Sans faille"
        },
        {
            "English": "Stream",
            "French": "Courant"
        },
        {
            "English": "diligence",
            "French": "Assiduité"
        },
        {
            "English": "Poignant",
            "French": "Poignant",
            "Arabic": "مثير للمشاعر",
            "Meaning": "causing or having a very sharp feeling of sadness:"
        },
        {
            "English": "relentlessly",
            "French": "sans relache"
        },
        {
            "English": "Vault",
            "French": "Voute",
            "Arabic": "قبو"
        },
        {
            "English": "Acreage",
            "French": "Superficie"
        },
        {
            "English": "Coax",
            "French": "Amadouer",
            "Arabic": "اقناع",
            "Meaning": "to persuade someone gently to do something or go somewhere, by being kind and patient, or by appearing to be"
        },
        {
            "English": "Plot",
            "French": "Terrain"
        },
        {
            "English": "Fledgling",
            "French": "jeune",
            "Arabic": "الوليد"
        },
        {
            "English": "Acres",
            "French": "Acres",
            "Arabic": "فدان"
        },
        {
            "English": "Bulk",
            "French": "Masse",
            "Arabic": "حجم"
        },
        {
            "English": "Entranced",
            "French": "Ravi",
            "Meaning": "If you are entranced by someone or something that is very interesting or beautiful, you cannot stop watching him, her, or it:"
        },
        {
            "English": "Harvest",
            "French": "Récolte"
        },
        {
            "English": "Perennial",
            "French": "Vivace",
            "Arabic": "الدائمة",
            "Meaning": "lasting a very long time, or happening repeatedly or all the time:"
        },
        {
            "English": "Bound",
            "French": "lié"
        },
        {
            "English": "Slinking",
            "French": "Furtif",
            "Arabic": "أنسل خلسة",
            "Meaning": "to walk away from somewhere quietly so that you are not noticed:"
        },
        {
            "English": "Mud",
            "French": "boue",
            "Arabic": " طين"
        },
        {
            "English": "Stained ",
            "French": "Tacheté",
            "Arabic": "ملطخة"
        },
        {
            "English": "Dusted off",
            "French": "Dépoussier"
        },
        {
            "English": "boot",
            "French": "botte"
        },
        {
            "English": "Jar",
            "Arabic": "اناء",
            "Meaning": "pot"
        },
        {
            "English": "bean",
            "French": "Haricot"
        },
        {
            "English": "topped",
            "French": "Surmonté"
        },
        {
            "English": "Thick",
            "French": "Epais ",
            "Arabic": "سميك"
        },
        {
            "English": "Streak",
            "French": "Trainée",
            "Arabic": "خط",
            "Meaning": "a long, thin mark that is easily noticed because it is very different from the area surrounding it:"
        },
        {
            "English": "Cans",
            "French": "Cannette"
        },
        {
            "English": "Wild",
            "French": "Sauvage"
        },
        {
            "English": "Make a buck",
            "French": "Faire de l'argent",
            "Meaning": "a dollar"
        },
        {
            "English": "Compost",
            "French": "compost",
            "Arabic": "سماد"
        },
        {
            "English": "Yield",
            "French": "Rendement"
        },
        {
            "English": "Hone",
            "French": "Perfectionner"
        },
        {
            "English": "Plunge",
            "French": "plonger"
        },
        {
            "English": "wariness",
            "French": "prudence"
        },
        {
            "English": "Relish",
            "French": "Savourer"
        },
        {
            "English": "Scale",
            "French": "Echelle"
        },
        {
            "English": "Chunck",
            "French": "piece"
        },
        {
            "English": "Heap",
            "French": "tas",
            "Arabic": "كومة",
            "Meaning": "an untidy pile or mass of things"
        },
        {
            "English": "dizzying",
            "French": "étourdissant,vertigineux",
            "Arabic": "أصاب بالدوار",
            "Meaning": "feeling as if everything is turning around, and that you are not able to balance and may fall over:"
        },
        {
            "English": "District",
            "French": "Quartier"
        },
        {
            "English": "Downward",
            "French": "vers le bas",
            "Meaning": "moving towards a lower position:"
        },
        {
            "English": "Irrelevant ",
            "French": "Hors sujet"
        },
        {
            "English": "Plummet",
            "French": "Plomb",
            "Arabic": "هبوط بسرعة",
            "Meaning": "to fall very quickly and suddenly:"
        },
        {
            "English": "Fulfillment",
            "French": "accopmlissement"
        },
        {
            "English": "wield",
            "French": "manier",
            "Arabic": "إستخدم ببراعة",
            "Meaning": "to have or use power, authority, or influence, or to hold and use a weapon"
        },
        {
            "English": "unencumbered",
            "French": "sans encombre",
            "Arabic": "غير مرتبط",
            "Meaning": "without something making it difficult for you to do something:"
        },
        {
            "English": "Fickle",
            "French": "inconstant"
        },
        {
            "English": "Stubborn",
            "French": "Têtu"
        },
        {
            "English": "Ammo",
            "French": "munition"
        },
        {
            "English": "Trap",
            "French": "Piege"
        },
        {
            "English": "Exotic",
            "French": "Exotique",
            "Arabic": "غريب"
        },
        {
            "English": "Wilderness",
            "French": "Jungle"
        },
        {
            "English": "Vaguely",
            "French": "Vaguement",
            "Arabic": "بغموض"
        },
        {
            "English": "Faltered",
            "French": "Vaciller",
            "Arabic": "تعثرت",
            "Meaning": "to lose strength or purpose and stop, or almost stop:"
        },
        {
            "English": "Substantial",
            "French": "Substantiel",
            "Arabic": "جوهري"
        },
        {
            "English": "Mere",
            "French": "Simple",
            "Meaning": "used to emphasize that something is not large or important:"
        },
        {
            "English": "Dive",
            "French": "Plongé"
        },
        {
            "English": "Veer",
            "French": "virer",
            "Arabic": "انحراف",
            "Meaning": "to change direction:"
        },
        {
            "English": "Disciple",
            "Meaning": "Follower"
        },
        {
            "English": "Coined",
            "French": "Inventer"
        },
        {
            "English": "Average joe",
            "French": " personne de profil moyen"
        },
        {
            "English": "devoted",
            "French": "devoué",
            "Arabic": "كرس",
            "Meaning": "extremely loving and loyal:"
        },
        {
            "English": "bleak",
            "French": "morne",
            "Arabic": "كئيب"
        },
        {
            "English": "fellow",
            "French": "compagnon"
        },
        {
            "English": "creep",
            "French": "glisser",
            "Meaning": "to move slowly, quietly, and carefully, usually in order to avoid being noticed:"
        },
        {
            "English": "Exasperation",
            "Arabic": "سخط",
            "Meaning": "the feeling of being annoyed, especially because you can do nothing to solve a problem:"
        },
        {
            "English": "bucket",
            "French": "seau",
            "Arabic": "دلو"
        },
        {
            "English": "Alas",
            "French": "Helas",
            "Arabic": "وا حسرتاه",
            "Meaning": "used to express sadness or feeling sorry about something:"
        },
        {
            "English": "Entrenched",
            "French": "retranché",
            "Arabic": "ترسخ",
            "Meaning": "Entrenched ideas are so fixed or have existed for so long that they cannot be changed:"
        },
        {
            "English": "Promting",
            "French": "incitation"
        },
        {
            "English": "Dismay",
            "French": "Consternation",
            "Arabic": "الفزع",
            "Meaning": "a feeling of unhappiness and disappointment:"
        },
        {
            "English": "Bid",
            "French": "offre",
            "Meaning": "to offer a particular amount of money for something that is for sale and compete against other people to buy it, especially at a public sale of goods or property:"
        },
        {
            "English": "Rung",
            "French": "echelon"
        },
        {
            "English": "ladder",
            "French": "Echelle"
        },
        {
            "English": "Pave",
            "French": "Paver",
            "Arabic": "مهد"
        },
        {
            "English": "Tormenting",
            "French": "Torturant",
            "Meaning": "great mental suffering and unhappiness, or great physical pain:"
        },
        {
            "English": "Tufts",
            "French": "Touffes",
            "Arabic": "خصل",
            "Meaning": "a number of short pieces of hair, grass, etc. that grow closely together or are held together near the base:"
        },
        {
            "English": "Candy",
            "French": "Bonbon"
        },
        {
            "English": "Chafe",
            "French": "irriter",
            "Arabic": "اغتاظ",
            "Meaning": "to make or become damaged or sore by rubbing:"
        },
        {
            "English": "Whim",
            "French": "Caprice",
            "Arabic": "نزوة"
        },
        {
            "English": "Gurney",
            "French": "civière",
            "Meaning": "a light bed on wheels, used to move patients in a hospital"
        },
        {
            "English": "nuts",
            "French": "noisette"
        },
        {
            "English": "Tales",
            "French": "contes",
            "Arabic": "حكاية"
        },
        {
            "English": "craved",
            "French": "imploré",
            "Arabic": "مشتهى"
        },
        {
            "English": "Stifling",
            "French": "Etouffant"
        },
        {
            "English": "Incentive",
            "French": "Motivation",
            "Meaning": "something that encourages a person to do something:"
        },
        {
            "English": "Egging",
            "French": "incitation",
            "Arabic": "تحريض",
            "Meaning": "to encourage someone to do something,"
        },
        {
            "English": "disdain",
            "French": "mépris",
            "Arabic": "أنف من;إزدراء",
            "Meaning": "the feeling of not liking someone or something and thinking that they do not deserve your interest or respect:"
        },
        {
            "English": "Toy",
            "French": "Jouer",
            "Meaning": "an object for children to play with"
        },
        {
            "English": "Heed",
            "French": "Tenir compte",
            "Meaning": "to pay attention to something, especially advice or a warning:"
        },
        {
            "English": "Shelve",
            "French": "Ranger"
        },
        {
            "English": "Conundrum",
            "French": "Énigme"
        },
        {
            "English": "Cheery",
            "French": "Gai",
            "Arabic": "مبتهج",
            "Meaning": "bright and happy"
        },
        {
            "English": "Crude",
            "French": "Brut",
            "Arabic": "خام"
        },
        {
            "English": "Heuristic",
            "French": "Heuristique",
            "Arabic": "ارشادي",
            "Meaning": "a method of learning or solving problems that allows people to discover things themselves and learn from their own experiences:"
        },
        {
            "English": "Viability",
            "Arabic": "بقاء",
            "Meaning": "ability to continue to exist or develop as a living being:"
        },
        {
            "English": "Guts",
            "French": "cran",
            "Arabic": "أحشاء"
        },
        {
            "English": "Bow",
            "French": "Incliner"
        },
        {
            "English": "Occurred",
            "French": "Eu lieu",
            "Meaning": "(especially of accidents and other unexpected events) to happen:"
        },
        {
            "English": "Prosaic",
            "Arabic": "ركيك ;عادي",
            "Meaning": "without interest, imagination, and excitement:"
        },
        {
            "English": "Crass",
            "Meaning": "stupid and without considering how other people might feel:"
        },
        {
            "English": "Hindsight",
            "French": "Sagesse retrospective",
            "Meaning": "the ability to understand an event or situation only after it has happened:"
        },
        {
            "English": "sifting",
            "French": "Tamisage",
            "Arabic": "غربلة"
        },
        {
            "English": "Pondering",
            "French": "Mediter;reflechir"
        },
        {
            "English": "Poised",
            "French": "Pret",
            "Arabic": "حفظ توازنه",
            "Meaning": "ready to do a particular thing at any moment:"
        },
        {
            "English": "Untamed",
            "French": "sauvage",
            "Meaning": "left in a natural or wild state:"
        },
        {
            "English": "dabble",
            "French": "barboter",
            "Arabic": "مارس هواية",
            "Meaning": "to take a slight and not very serious interest in a subject, or try a particular activity for a short period:"
        },
        {
            "English": "Dime",
            "Arabic": "جوج دريال",
            "Meaning": "an American or Canadian coin that has the value of ten cents"
        },
        {
            "English": "Whip",
            "French": "Fouet",
            "Arabic": "سوط"
        },
        {
            "English": "Praise",
            "French": "Louanger",
            "Arabic": "مديح",
            "Meaning": "to express admiration or approval of the achievements or characteristics of a person or thing:"
        },
        {
            "English": "Chatter",
            "French": "Bavarder"
        },
        {
            "English": "Penned",
            "French": "Ecrit"
        },
        {
            "English": "Venue",
            "French": "Lieu"
        },
        {
            "English": "Devise",
            "French": "Concevoir"
        },
        {
            "English": "chew up",
            "French": "macher"
        },
        {
            "English": "Spit out",
            "French": "Cracher"
        },
        {
            "English": "Idle",
            "French": "Inactive",
            "Arabic": "خامل",
            "Meaning": "not working or being used:"
        },
        {
            "English": "sift",
            "French": "Tamiser",
            "Arabic": "غربلة"
        },
        {
            "English": "Terse",
            "French": "Laconique",
            "Arabic": "مقتضب",
            "Meaning": "using few words, sometimes in a way that seems rude or unfriendly:"
        },
        {
            "English": "Cast",
            "French": "Lancer"
        },
        {
            "English": "Seed",
            "French": "Grain"
        },
        {
            "English": "Aversion",
            "Arabic": "نفور"
        },
        {
            "English": "vowed",
            "French": "Vouer; juré"
        },
        {
            "English": "oddly",
            "French": "bizarrement"
        },
        {
            "English": "Eldery",
            "French": "Personnes âgées"
        },
        {
            "English": "ditch",
            "French": "Eviter",
            "Meaning": "to get rid of something or someone that is no longer wanted:"
        },
        {
            "English": "Inoculated",
            "Arabic": "تلقيح"
        },
        {
            "English": "Dare",
            "French": "defier;oser"
        },
        {
            "English": "Scolded",
            "French": "réprimander",
            "Arabic": "وبخ",
            "Meaning": "to speak to someone angrily because you disapprove of their behaviour:"
        },
        {
            "English": "waned",
            "French": "décroît"
        },
        {
            "English": "Fretting",
            "French": "S'inquieter"
        },
        {
            "English": "Plague",
            "French": "Peste",
            "Arabic": "مصدر إزعاج",
            "Meaning": "to cause worry, pain, or difficulty to someone or something over a period of time:"
        },
        {
            "English": "Muster",
            "French": "Rassembler"
        },
        {
            "English": "cripple",
            "French": "Paralyser"
        },
        {
            "English": "Revitalizing",
            "French": "Revitalisant",
            "Arabic": "تنشيط",
            "Meaning": "to give new life, energy, activity, or success to something:"
        },
        {
            "English": "Obtuse",
            "Meaning": "(of an angle) more than 90° and less than 180°"
        },
        {
            "English": "Faint",
            "French": "Perdre connaissance",
            "Meaning": "to feel weak, as if you are about to become unconscious:"
        },
        {
            "English": "Lemma",
            "Meaning": "a form of a word that appears as an entry in a dictionary"
        },
        {
            "English": "Swath",
            "French": "Andain",
            "Arabic": "رقعة",
            "Meaning": "a strip or belt, or a long area of something:"
        },
        {
            "English": "Omission",
            "Arabic": "إغفال",
            "Meaning": "the act of not including something or someone that should have been included,"
        },
        {
            "English": "induce",
            "French": "induire",
            "Arabic": "إستنتج"
        },
        {
            "English": "Strain",
            "French": "Souche",
            "Arabic": "اجهاد"
        },
        {
            "English": "Tally",
            "French": "pointage",
            "Meaning": "a record or count of a number of things:"
        },
        {
            "English": "dwindle",
            "French": "diminuer",
            "Arabic": "تضاءل"
        },
        {
            "English": "Tenure",
            "French": "Mandat"
        },
        {
            "English": "Outwork",
            "French": "Dépasser"
        },
        {
            "English": "quip",
            "French": "Plaisanter",
            "Meaning": "a humorous and clever remark:"
        },
        {
            "English": "Mirage",
            "Arabic": "وهمي",
            "Meaning": " an image, produced by very hot air of something that seems to be far away but does not really exist"
        },
        {
            "English": "allure",
            "French": "Séduire"
        },
        {
            "English": "Saddle",
            "Meaning": "a leather seat on a horse"
        },
        {
            "English": "Deem",
            "French": "considerer",
            "Arabic": "تعتبر",
            "Meaning": "to consider or judge something in a particular way:"
        },
        {
            "English": "Usher",
            "French": "Huissiers",
            "Arabic": "ابشر ",
            "Meaning": "to show someone where to go or where to sit"
        },
        {
            "English": "Grueling ",
            "French": "Epuisant"
        },
        {
            "English": "unburdened",
            "French": "déchargé",
            "Meaning": "to free yourself of something that is worrying you, by talking about it to someone:"
        },
        {
            "English": "Ceaselessly",
            "French": "Sans cesse"
        },
        {
            "English": "carve out",
            "Meaning": "to create or obtain something that helps you by skillful activities:"
        },
        {
            "English": "Procrastinate",
            "French": "Remettre à plus tard",
            "Meaning": "to keep delaying something that must be done,"
        },
        {
            "English": "Aborted",
            "French": "Avorté",
            "Arabic": "احباط"
        },
        {
            "English": "Siped",
            "French": "Siroté",
            "Arabic": "ارتشف"
        },
        {
            "English": "Draining ",
            "French": "Evacuation",
            "Arabic": "استنزف",
            "Meaning": "causing you to lose most of your energy; very tiring:"
        },
        {
            "English": "bliss",
            "French": "Feliciter",
            "Arabic": "النعيم",
            "Meaning": "complete happiness"
        },
        {
            "English": "Subversive",
            "Arabic": "تخريبي",
            "Meaning": "trying to destroy or damage something, especially an established political system:"
        },
        {
            "English": "Folk",
            "French": "Population"
        },
        {
            "English": "Mystical",
            "French": "mystique",
            "Arabic": "روحاني",
            "Meaning": "relating to the belief that there is hidden meaning in life, or that each human being can unite with God:"
        },
        {
            "English": "wrench",
            "French": "arracher",
            "Meaning": "to pull and twist something suddenly or violently away from its position:"
        },
        {
            "English": "Sober",
            "French": "sobre",
            "Arabic": "رزين",
            "Meaning": "not drunk or affected by alcohol:"
        },
        {
            "English": "Conjure",
            "Arabic": "استحضار",
            "Meaning": "to make something appear by magic, or as if by magic:"
        },
        {
            "English": "Tenet",
            "French": "principe"
        },
        {
            "English": "Excerpted",
            "French": "Extrait"
        },
        {
            "English": "Sole",
            "French": "unique"
        },
        {
            "English": "Frankly ",
            "French": "Franchement"
        },
        {
            "English": "sidestep",
            "French": "Eviter"
        },
        {
            "English": "Compel",
            "French": "Forcer"
        },
        {
            "English": "Pare down",
            "French": "Reduire"
        },
        {
            "English": "Harbor",
            "French": "port; heberger"
        },
        {
            "English": "Dispel",
            "French": "dissiper",
            "Arabic": "تبدد",
            "Meaning": "to remove fears, doubts, and false ideas, usually by proving them wrong or unnecessary:"
        },
        {
            "English": "Havoc",
            "French": "ravage",
            "Arabic": "يخرب",
            "Meaning": "confusion and lack of order, especially causing damage or trouble:"
        },
        {
            "English": "Parcel",
            "French": "parcelle",
            "Meaning": "Land"
        },
        {
            "English": "Bargain",
            "French": "negocier"
        },
        {
            "English": "Drastic",
            "French": "radical"
        },
        {
            "English": "keepsake",
            "French": "souvenir",
            "Meaning": "a small present, usually not expensive, that is given to you by someone so that you will remember that person"
        },
        {
            "English": "Heirloom",
            "French": "Heritage"
        },
        {
            "English": "Famed",
            "French": "Celebre"
        },
        {
            "English": "Fabled",
            "French": "legendaire"
        },
        {
            "English": "dimly",
            "French": "Faiblement",
            "Meaning": "slightly, but not very well:"
        },
        {
            "English": "Pipette",
            "Arabic": "ماصة",
            "Meaning": "a thin glass tube used especially in biology and chemistry for measuring or moving a small amount of liquid"
        },
        {
            "English": "Steel",
            "French": "Acier",
            "Arabic": "فولاذ",
            "Meaning": "a strong metal that is a mixture of iron and carbon, used for making things that need a strong structure, especially vehicles and buildings:"
        },
        {
            "English": "elusive",
            "French": "insaisissable",
            "Arabic": "صعبة المنال"
        },
        {
            "English": "curmudgeon",
            "Meaning": "an old person who is often in a bad mood"
        },
        {
            "English": "bleak",
            "French": "Morne;Triste",
            "Arabic": "كئيب"
        },
        {
            "English": "Fate",
            "French": "Destin"
        },
        {
            "English": "Grinding",
            "French": "Broyage",
            "Arabic": "آلة طحن",
            "Meaning": "Something that is grinding causes people or activities to lose energy and spirit:"
        },
        {
            "English": "cynicism",
            "French": "cynicisme",
            "Arabic": "السخرية",
            "Meaning": "the belief that people are only interested in themselves and are not sincere:"
        },
        {
            "English": "Rid",
            "French": "debarasser"
        },
        {
            "English": "pop up",
            "French": "surgi",
            "Arabic": "برزت",
            "Meaning": "to appear or happen, especially suddenly or unexpectedly:"
        },
        {
            "English": "mimic",
            "French": "imiter"
        },
        {
            "English": "litigation",
            "French": "litige"
        },
        {
            "English": "drain",
            "French": "drainer",
            "Arabic": "لاستنزاف",
            "Meaning": "causing you to lose most of your energy; very tiring:"
        },
        {
            "English": "cure",
            "French": "guerir",
            "Meaning": "to make someone with an illness healthy again:"
        },
        {
            "English": "reap ",
            "French": "receuillir",
            "Arabic": "جني"
        },
        {
            "English": "broad",
            "French": "vaste",
            "Meaning": "very wide:"
        },
        {
            "English": "doomed",
            "Arabic": "محكوم عليها بالفشل",
            "Meaning": "certain to fail, die, or be destroyed:"
        },
        {
            "English": "sputter",
            "French": "cracher"
        },
        {
            "English": "leap"
        },
        {
            "English": "coaxing",
            "Meaning": "the act of persuading someone gently to do something, by being kind and patient, or by appearing to be:"
        },
        {
            "English": "subtlety",
            "French": "subtilité",
            "Arabic": "دقة",
            "Meaning": "a small but important detail:"
        },
        {
            "English": "Fare",
            "French": "Tarif"
        },
        {
            "English": "Penniless",
            "French": "Sans ressource",
            "Meaning": "having no money:"
        },
        {
            "English": "baffling",
            "French": "Confusion"
        },
        {
            "English": "dissemination",
            "French": "diffusion",
            "Meaning": "the act of spreading news, information, ideas, etc. to a lot of people:"
        },
        {
            "English": "Esoteric",
            "French": "ésotérique",
            "Arabic": "مقصور على فئة معينة",
            "Meaning": "very unusual and understood or liked by only a small number of people, especially those with special knowledge:"
        },
        {
            "English": "Prominent",
            "French": "Important"
        },
        {
            "English": "breakthrough",
            "French": "découverte capitale",
            "Arabic": "تقدم مفاجئ في المعرفة",
            "Meaning": "an important discovery or event that helps to improve a situation or provide an answer to a problem:"
        },
        {
            "English": "Tangential",
            "Arabic": "تماسي"
        },
        {
            "English": "Slashing",
            "French": "Coup de bâton",
            "Meaning": "slap of liquid"
        },
        {
            "English": "Jigger",
            "Meaning": "a small, round metal container used for measuring strong alcoholic drinks, or the amount of alcohol that this container holds"
        },
        {
            "English": "loomed",
            "French": "imminent"
        },
        {
            "English": "Eureka",
            "Meaning": "Joy to discover something"
        },
        {
            "English": "Vantage",
            "French": "Avantage"
        },
        {
            "English": "niche",
            "Meaning": "confortable job or field"
        },
        {
            "English": "chip",
            "French": "puce, jeton"
        },
        {
            "English": "Errand ",
            "French": "mission",
            "Meaning": "a short journey either to take a message or to take or collect something:"
        },
        {
            "English": "major",
            "French": "se specialiser",
            "Meaning": "to study something as your main subject at college or university:"
        },
        {
            "English": "premonition",
            "French": "premonition",
            "Arabic": "هاجس",
            "Meaning": "a feeling that something, especially something unpleasant, is going to happen:"
        },
        {
            "English": "Culminating",
            "French": "Culminant",
            "Arabic": "بلغت تروة;تتوج",
            "Meaning": "to have as a result or be the final result of a process:"
        },
        {
            "English": "Novelty",
            "French": "Nouveauté"
        },
        {
            "English": "Zeal ",
            "French": "Zèle",
            "Arabic": "حماسة",
            "Meaning": "great enthusiasm or eagerness:"
        },
        {
            "English": "suppress",
            "French": "reprimer",
            "Arabic": "كبح"
        },
        {
            "English": "Solidify",
            "French": "solidifier",
            "Arabic": "يوطد",
            "Meaning": "to make something complete, or to become more certain or safer: make certain"
        },
        {
            "English": "proponent",
            "French": "Partisan",
            "Arabic": "أنصار"
        },
        {
            "English": "Dastin",
            "French": "consacrer"
        },
    
    
        {
            "English": "Stake",
            "French": "enjeux",
            "Arabic": "الرهانات",
            "Meaning": "to risk an amount of money:"
        },
        {
            "English": "mankind",
            "French": "humanité",
            "Meaning": "the whole of the human race, including both men and women:"
        },
        {
            "English": "neatly  ",
            "French": "soigneusement",
            "Meaning": "in a tidy way:"
        },
        {
            "English": "clip out",
            "French": "couper"
        },
        {
            "English": "steeped in",
            "Meaning": "Surround or fill with a quality or influence."
        },
        {
            "English": "prominent",
            "Meaning": "very well known and important:"
        },
        {
            "English": " slant",
            "French": "incliner"
        },
        {
            "English": "Queer",
            "French": "Etrange"
        },
        {
            "English": "slant-eyed",
            "Meaning": "Like chinese eyes"
        },
        {
            "English": "accuracy",
            "French": "précision,"
        },
        {
            "English": "substance",
            "French": "substance",
            "Arabic": "جوهر",
            "Meaning": "Essence"
        },
        {
            "English": "stupendous",
            "French": "prodigieux",
            "Meaning": "very surprising, usually in a pleasing way, especially by being large in amount or size:"
        },
        {
            "English": "lay",
            "French": "poser"
        },
        {
            "English": "urge",
            "French": "exhorter",
            "Arabic": "حث",
            "Meaning": "a strong wish, especially one that is difficult or impossible to control:"
        },
        {
            "English": "convey",
            "French": "transmettre",
            "Meaning": "transport or carry to a place"
        },
        {
            "English": "far-flung",
            "French": "lointain",
            "Arabic": "نائية",
            "Meaning": "used to refer to places that are a great distance away, or something that is spread over a very large area:"
        },
        {
            "English": "enheartened",
            "French": "émerveillé",
            "Arabic": "متحمس",
            "Meaning": "feeling happier and more positive about something:"
        },
        {
            "English": "unbiased",
            "French": "impartial",
            "Arabic": "غير منحازة",
            "Meaning": "able to judge fairly because you are not influenced by your own opinions:"
        },
        {
            "English": "virtues",
            "French": "virtus",
            "Arabic": "مزايا،",
            "Meaning": "a good moral quality in a person, or the general quality of being morally good:"
        },
        {
            "English": "tramp ",
            "French": "Clochard"
        },
        {
            "English": "keen",
            "French": "enthousiaste,",
            "Meaning": "very interested, eager, or wanting (to do) something very much:"
        },
        {
            "English": "transcended",
            "French": "transcendé",
            "Arabic": "تجاوز",
            "Meaning": "to go further, rise above, or be more important or better than something, especially a limit:"
        },
        {
            "English": "cherished",
            "French": "chéri",
            "Arabic": "عزيز",
            "Meaning": "bringing the pleasure of love or caring about someone or something that is important to you:"
        },
        {
            "English": "attainment",
            "French": "réalisation"
        },
        {
            "English": "cog",
            "French": "secondaire;dent",
            "Arabic": "شخص ثانوي",
            "Meaning": "cogwheel"
        },
        {
            "English": "perish",
            "French": "perir",
            "Arabic": "هلك",
            "Meaning": "to die, especially in an accident or by being killed, or to be destroyed:"
        },
        {
            "English": "foe ",
            "French": "ennemi"
        },
        {
            "English": "outnumbereden infériorité numérique"
        },
        {
            "English": "saile",
            "French": "naviguer"
        },
        {
            "English": "shores",
            "French": "cote"
        },
        {
            "English": "retreat.",
            "Meaning": "to go away from a place or person in order to escape from fighting or danger:"
        },
        {
            "English": "dismal",
            "Arabic": "كئيب",
            "Meaning": "sad and without hope:"
        },
        {
            "English": "scrutinize",
            "French": "scruter",
            "Arabic": "يفحص، يدقق",
            "Meaning": "to examine something very carefully in order to discover information:"
        },
        {
            "English": "harnessed",
            "French": "attelé",
            "Arabic": "تسخير",
            "Meaning": "to control something, usually in order to use its power:"
        },
        {
            "English": "remoulded;retread ",
            "French": "remoulé",
            "Arabic": "أعيد تشكيله",
            "Meaning": "to do something that has been done before, without adding any new ideas:\n"
        },
        {
            "English": "scorn",
            "French": "mépris",
            "Arabic": "سخرية",
            "Meaning": "a very strong feeling of no respect for someone or something that you think is stupid or has no value:"
        },
        {
            "English": "shrine ",
            "French": "tombeau",
            "Arabic": "قبر"
        },
        {
            "English": "vain",
            "Meaning": "unsuccessful; of no value:"
        },
        {
            "English": "custody",
            "French": "garde",
            "Arabic": "رعاية",
            "Meaning": "care;the legal right or duty to care for someone or something, especially a child after its parents have separated or died:"
        },
        {
            "English": "wire",
            "French": "fil"
        },
        {
            "English": "Nay ",
            "Arabic": "لا بل\n",
            "Meaning": "used to introduce a second and more extreme phrase in a sentence when the first phrase was not strong enough:"
        },
        {
            "English": "oak",
            "Arabic": "البلوط"
        },
        {
            "English": "acorn",
            "Arabic": "شجرة البلوط\n"
        },
        {
            "English": "scoff ",
            "French": "moquerie",
            "Arabic": "سخرية"
        },
        {
            "English": "harnessing  ",
            "French": "exploiter",
            "Arabic": "تسخير",
            "Meaning": "to control something, usually in order to use its power:"
        },
        {
            "English": "sorely",
            "Meaning": "extremely; very much:"
        },
        {
            "English": "misfortune",
            "Meaning": "bad luck, or an unlucky event:"
        },
        {
            "English": "depth ",
            "French": "profondeur"
        },
        {
            "English": "deaf",
            "French": "sourd"
        },
        {
            "English": "indelibly",
            "French": "indélébile",
            "Meaning": "in a way that is impossible to remove by washing or in any other way:"
        },
        {
            "English": "cursed",
            "French": "maudit",
            "Arabic": "ملعون",
            "Meaning": "experiencing problems and unhappiness:"
        },
        {
            "English": "plucked ",
            "French": "arraché",
            "Arabic": "قطف"
        },
        {
            "English": "kindle",
            "French": "allumer",
            "Arabic": "أضرم",
            "Meaning": "to cause a fire to start burning by lighting paper, wood, etc."
        },
        {
            "English": "winding ",
            "French": "sinueux",
            "Arabic": "المتعرجة"
        },
        {
            "English": "penny",
            "French": "pence",
            "Arabic": "قطعة نقدية صغيرة"
        },
        {
            "English": "scanty",
            "French": "maigre",
            "Arabic": "هزيل",
            "Meaning": "smaller in size or amount than is considered necessary or is hoped for:"
        },
        {
            "English": "bear  ",
            "French": "supporter"
        },
        {
            "English": "wage",
            "French": "salaire"
        },
        {
            "English": "Outwit",
            "Meaning": "to obtain an advantage over someone by being more intelligent; to outsmart:"
        },
        {
            "English": "recede",
            "French": "reculer",
            "Meaning": "to move further away into the distance, or to become less clear:"
        },
        {
            "English": "pledge",
            "French": "gage",
            "Arabic": "التعهد",
            "Meaning": "a serious or formal promise"
        },
        {
            "English": "ecstasies",
            "French": "extases",
            "Arabic": "ابتهاج",
            "Meaning": "a state of extreme happiness, especially when feeling pleasure:"
        },
        {
            "English": "liability",
            "French": "responsabilité"
        },
        {
            "English": "ADVERSITY",
            "French": "ADVERSITÉ",
            "Arabic": "الظلم",
            "Meaning": "a difficult or unlucky situation or event:"
        },
        {
            "English": "wrapping",
            "French": "emballage",
            "Meaning": "paper or plastic that covers or protects something:"
        },
        {
            "English": "wares",
            "French": "marchandises",
            "Arabic": "سلع",
            "Meaning": "small products for selling, especially in a market or on the street:"
        },
        {
            "English": "consent",
            "French": "consentement",
            "Arabic": "موافقة",
            "Meaning": "permission or agreement:"
        },
        {
            "English": "clenched",
            "French": "serré",
            "Meaning": "to close or hold something very tightly, often in a determined or angry way:"
        },
        {
            "English": "endeavor",
            "French": "effort",
            "Meaning": "to try to do something:"
        },
        {
            "English": "alibi",
            "Meaning": "an excuse for something bad or for a failure:"
        },
        {
            "English": "hook up",
            "Meaning": "link;a connection to an electricity supply, a telephone network, the internet, etc."
        },
        {
            "English": "dividends",
            "Arabic": "أرباح"
        },
        {
            "English": "hunch",
            "French": "pressentiment"
        },
        {
            "English": "skeptical",
            "French": "sceptique",
            "Arabic": "متشكك",
            "Meaning": "doubting that something is true or useful:"
        },
        {
            "English": "skull",
            "French": "crâne",
            "Arabic": "جمجمة"
        },
        {
            "English": "neglected",
            "French": "négligé"
        },
        {
            "English": "verily",
            "French": "en vérité"
        },
        {
            "English": "devious",
            "French": "sournois",
            "Arabic": "الملتوية",
            "Meaning": "not direct"
        },
        {
            "English": "bundle",
            "French": "paquet",
            "Arabic": "حزمة"
        },
        {
            "English": "bend",
            "French": "plier"
        },
        {
            "English": "imponderable",
            "Arabic": "مستحيل",
            "Meaning": "something that cannot be guessed or calculated because it is completely unknown:"
        },
        {
            "English": "exclaim",
            "Arabic": "صاح",
            "Meaning": "to say or shout something suddenly because of surprise, fear, pleasure, etc"
        },
        {
            "English": "sewing",
            "French": "couture"
        },
        {
            "English": "emaciated",
            "Arabic": "هزال",
            "Meaning": "very thin and weak, usually because of illness or extreme hunger:"
        },
        {
            "English": "feebly",
            "French": "faiblement"
        },
        {
            "English": "divulged",
            "French": "divulguer"
        },
        {
            "English": "abhor",
            "French": "abhorrer",
            "Arabic": "يبغض",
            "Meaning": "to hate a way of behaving or thinking, often because you think it is not moral:"
        },
        {
            "English": "hinder",
            "French": "empêcher",
            "Meaning": "to limit the ability of someone to do something, or to limit the development of something:"
        },
        {
            "English": "deceit",
            "French": "tromperie",
            "Meaning": "(an act of) keeping the truth hidden, especially to get an advantage:"
        },
        {
            "English": "abode",
            "French": "demeure",
            "Arabic": "مسكن"
        },
        {
            "English": "admonished",
            "French": "réprimandé",
            "Arabic": "محذر",
            "Meaning": "to tell someone that they have done something wrong:"
        },
        {
            "English": "dogma",
            "French": "dogme/",
            "Arabic": "عقيدة",
            "Meaning": "a fixed, especially religious, belief or set of beliefs that people are expected to accept without any doubts"
        },
        {
            "English": "Creed",
            "French": "credo",
            "Arabic": "عقيدة",
            "Meaning": "a set of beliefs that influences the way you live"
        },
        {
            "English": "antidote",
            "French": "antidote",
            "Arabic": "ترياق\r"
        },
        {
            "English": "greed",
            "French": "avidité",
            "Arabic": "جشع",
            "Meaning": "a very strong wish to continuously get more of something, especially food or money:"
        },
        {
            "English": "fertile  ",
            "French": "fertile  ",
            "Arabic": "خصبة"
        },
        {
            "English": "soil",
            "French": "sol"
        },
        {
            "English": "germinate ",
            "French": "germer",
            "Arabic": "تنبت",
            "Meaning": "to (cause a seed to) start growing:"
        },
        {
            "English": "hatred,",
            "French": "haine"
        },
        {
            "English": "baffle ",
            "French": "baffle ",
            "Arabic": "يربك",
            "Meaning": "to cause someone to be completely unable to understand or explain something:"
        },
        {
            "English": "stagger",
            "French": "échelonner",
            "Meaning": "to walk or move with difficulty as if you are going to fall:"
        },
        {
            "English": "dare",
            "French": "oser"
        },
        {
            "English": "sorrow",
            "French": "chagrin",
            "Meaning": "(a cause of) a feeling of great sadness:"
        },
        {
            "English": "akin",
            "French": "proche",
            "Meaning": "having some of the same qualities:"
        },
        {
            "English": "wield",
            "French": "manier",
            "Arabic": "إستخدم ببراعة",
            "Meaning": "to have or use power, authority, or influence, or to hold and use a weapon:"
        },
        {
            "English": "coalesce",
            "French": "se fondre",
            "Meaning": "melt"
        },
        {
            "English": "UNISON",
            "French": "unisson",
            "Meaning": "harmony"
        },
        {
            "English": "widespread ",
            "French": "répandu",
            "Meaning": "واسع الانتشار"
        },
        {
            "English": "coal ",
            "French": "charbon",
            "Arabic": "فحم"
        },
        {
            "English": "bicker ",
            "French": "se chamailler",
            "Arabic": "المشاحن",
            "Meaning": "to argue about things that are not important:"
        },
        {
            "English": "watchword",
            "Arabic": "شعار",
            "Meaning": "the main ideas or principles directing the way that someone behaves or the way that something is done:"
        },
        {
            "English": "backed",
            "French": "soutenu"
        },
        {
            "English": "courtesy",
            "French": "courtoisie",
            "Arabic": "مجاملة",
            "Meaning": "polite behavior, or a polite action:"
        },
        {
            "English": "lavish",
            "French": "copieux;genereux",
            "Arabic": "سخي",
            "Meaning": "large in quantity and expensive or impressive:"
        },
        {
            "English": "bestowed",
            "French": "accordé"
        },
        {
            "English": "stampede ",
            "French": "débandade"
        },
        {
            "English": "stuffed  ",
            "French": "farci",
            "Arabic": "محشو",
            "Meaning": "filled with a stuffing:"
        },
        {
            "English": "bosoms",
            "Arabic": "حضن",
            "Meaning": "a woman's breasts:"
        },
        {
            "English": "dissolve",
            "French": "dissoudre",
            "Arabic": "حل البرلمان\r",
            "Meaning": "to end an official organization or a legal arrangement:"
        },
        {
            "English": "frenzy",
            "French": "frénésie",
            "Arabic": "نوبة",
            "Meaning": "uncontrolled and excited behaviour or emotion that is sometimes violent:"
        },
        {
            "English": "wit",
            "Arabic": "خفة دم.",
            "Meaning": "the ability to use words in a clever and humorous way:"
        },
        {
            "English": "threaded",
            "French": "fileté",
            "Arabic": "مترابطة"
        },
        {
            "English": "dangling",
            "Arabic": "متدلي"
        },
        {
            "English": "full-fledged",
            "French": "à part entière",
            "Meaning": "completely developed or qualified:"
        },
        {
            "English": "aggrandizement",
            "French": "agrandissement"
        },
        {
            "English": "foster",
            "French": "favoriser",
            "Meaning": "to encourage the development or growth of ideas or feelings:"
        },
        {
            "English": "delirious",
            "French": "delire",
            "Meaning": "extremely happy or excited:"
        },
        {
            "English": "forsaken",
            "French": "abondonner"
        },
        {
            "English": "picayune",
            "Meaning": "having little value or importance:"
        },
        {
            "English": "retaliation",
            "French": "représailles.",
            "Arabic": "انتقام."
        },
        {
            "English": "plum",
            "French": "prune",
            "Arabic": "وظيفة محترمة",
            "Meaning": "very good and worth having:"
        },
        {
            "English": "inference",
            "French": "inference",
            "Arabic": "الإستنباط،",
            "Meaning": "a belief or opinion that you develop from the information that you know"
        },
        {
            "English": "buccaneers",
            "French": "boucaniers",
            "Meaning": "a business person who is determined to succeed even if this involves taking big risks:"
        },
        {
            "English": "piracy",
            "French": "piratage",
            "Meaning": "the act of attacking ships in order to steal from them:"
        },
        {
            "English": "fiddle",
            "French": "truquer",
            "Meaning": "Cheat;to act dishonestly in order to get something for yourself, or to change something dishonestly, especially to your advantage"
        },
        {
            "English": "feast",
            "French": "banquet",
            "Arabic": "وليمة",
            "Meaning": "a special meal with very good food or a large meal for many people:"
        },
        {
            "English": "endowed",
            "French": "doté",
            "Arabic": "موهوب"
        },
        {
            "English": "holiness",
            "French": "sainteté",
            "Arabic": "قداسة"
        },
        {
            "English": "steadfast",
            "French": "ferme",
            "Arabic": "صامدون",
            "Meaning": "staying the same for a long time and not changing quickly or unexpectedly:"
        },
        {
            "English": "Divine",
            "French": "Divine",
            "Arabic": "إلهي",
            "Meaning": "connected with a god, or like a god:"
        },
        {
            "English": "undertake",
            "Arabic": "يتعهد",
            "Meaning": "to promise that you will do something:"
        },
        {
            "English": "volubly",
            "French": "volubile",
            "Arabic": "بصعوبة"
        },
        {
            "English": "cozy",
            "French": "confortable"
        },
        {
            "English": "glittering",
            "French": "scintillant",
            "Arabic": "التألق",
            "Meaning": "exciting or admired by many people, usually relating to rich and famous people:"
        },
        {
            "English": "deck",
            "Arabic": "ظهر السفينة"
        },
        {
            "English": "ruefully",
            "French": "avec regret"
        },
        {
            "English": "cheerfully.",
            "Arabic": "بمرح.",
            "Meaning": "in a happy and positive way:"
        },
        {
            "English": "uproar ",
            "French": "tumulte",
            "Arabic": "ضجة",
            "Meaning": "loud complaints esp. by angry people, or a noisy state of confusion:"
        },
        {
            "English": "shove",
            "French": "bousculer",
            "Meaning": "to push someone or something forcefully:"
        },
        {
            "English": "vigorously",
            "French": "vigoureusement",
            "Arabic": "بقوة",
            "Meaning": "in a way that is very forceful or energetic:"
        },
        {
            "English": "twinkling",
            "French": "scintillement.",
            "Arabic": "طرفة عين",
            "Meaning": "a very short time:"
        },
        {
            "English": "ACKNOWLEDGE",
            "French": "RECONNAÎTRE"
        },
        {
            "English": "OFFSPRING",
            "French": "PROGÉNITURE",
            "Arabic": "ذرية\r",
            "Meaning": "a person's children:"
        },
        {
            "English": "sow",
            "French": "truie",
            "Arabic": "زرع",
            "Meaning": "to put seeds in or on the ground so that plants will grow:"
        },
        {
            "English": "warrant",
            "French": "garantir"
        },
        {
            "English": "everlasting",
            "French": "eternel"
        },
        {
            "English": "strive",
            "French": "s'efforcer",
            "Arabic": "السعي"
        },
        {
            "English": "hence",
            "Arabic": "من الآن"
        },
        {
            "English": "ignorant ",
            "French": "ignorant ",
            "Arabic": "جاهل",
            "Meaning": "not having enough knowledge, understanding, or information about something:"
        },
        {
            "English": "attorneys",
            "French": "avocat"
        },
        {
            "English": "plead ",
            "French": "plaider",
            "Arabic": " ;التمس;مناشدة"
        },
        {
            "English": "pertain ",
            "French": "concerner"
        },
        {
            "English": "lean over",
            "French": "se pencher sur",
            "Arabic": "تتكئ على"
        },
        {
            "English": "summon",
            "French": "convoquer"
        },
        {
            "English": "clutter",
            "Meaning": "to fill something in an untidy or badly organized way:"
        },
        {
            "English": "plentiful ",
            "French": "copieux"
        },
        {
            "English": "payroll",
            "French": "paie"
        },
        {
            "English": "miscellaneous",
            "French": "divers"
        },
        {
            "English": "contemplate",
            "French": "contempler",
            "Arabic": "تفكر"
        },
        {
            "English": "APPRENTICESHIP  ",
            "French": "APPRENTISSAGE"
        },
        {
            "English": "vocational",
            "French": "professionnel"
        },
        {
            "English": "seldom",
            "French": "rarement"
        },
        {
            "English": "prevailing",
            "French": "régnant",
            "Arabic": "السائدة",
            "Meaning": "existing in a particular place or at a particular time:"
        },
        {
            "English": "grocery",
            "French": "épicerie"
        },
        {
            "English": "Inasmuch",
            "French": "Dans la mesure où"
        },
        {
            "English": "spur",
            "French": "aiguiller",
            "Arabic": "لتحفيز",
            "Meaning": "to encourage an activity or development or make it happen faster:\r"
        },
        {
            "English": "lift",
            "French": "soulever",
            "Arabic": "لرفع"
        },
        {
            "English": "cease",
            "French": "cesser"
        },
        {
            "English": "scarce",
            "French": "rarement"
        },
        {
            "English": "fling",
            "Meaning": "a short period of enjoyment:"
        },
        {
            "English": " eulogy",
            "French": "éloge",
            "Arabic": "مديح"
        },
        {
            "English": "COMPROMISE",
            "French": "FAIRE DES COMPROMIS",
            "Arabic": "إلى حل وسط",
            "Meaning": "an agreement in an argument in which the people involved reduce their demands or change their opinion in order to agree:"
        },
        {
            "English": "monotonous",
            "French": "monotone",
            "Arabic": "رتيب",
            "Meaning": "not changing and therefore boring:"
        },
        {
            "English": "dreary",
            "French": "morne",
            "Arabic": "كئيب",
            "Meaning": "boring and making you feel unhappy:"
        },
        {
            "English": "nucleus ",
            "French": "noyau"
        },
        {
            "English": "outgrew",
            "French": "dépassé"
        },
        {
            "English": "disclose",
            "French": "dévoiler"
        }
    ]

  users = [
    {
      "name": "Gilliam Church"
    },
    {
      "name": "Sharpe Dale"
    },
    {
      "name": "Cheri Jimenez"
    },
    {
      "name": "Emma Irwin"
    },
    {
      "name": "Wanda Lott"
    },
    {
      "name": "Peters Jenkins"
    },
    {
      "name": "Cristina Clements"
    },
    {
      "name": "Howell Hopper"
    },
    {
      "name": "Rios Massey"
    },
    {
      "name": "Cameron Burgess"
    },
     
  ];
}

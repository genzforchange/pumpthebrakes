const emailAddresses = [
  "sen.adam.lowe@capitol.tn.gov", // J. Adam Lowe (R)
  "sen.art.swann@capitol.tn.gov", // Art Swann (R)
  "sen.rusty.crowe@capitol.tn.gov", // Rusty Crowe (R)
  "sen.jon.lundberg@capitol.tn.gov", // Jon Lundberg (R)
  "lt.gov.randy.mcnally@capitol.tn.gov", // Randy McNally (R)
  "sen.becky.massey@capitol.tn.gov", // Becky Massey (R)
  "sen.richard.briggs@capitol.tn.gov", // Richard Briggs (R)
  "sen.frank.niceley@capitol.tn.gov", // Frank Niceley (R)
  "sen.steve.southerland@capitol.tn.gov", // Steve Southerland (R)
  "sen.todd.gardenhire@capitol.tn.gov", // Todd Gardenhire (R)
  "sen.ken.yager@capitol.tn.gov", // Ken Yager (R)
  "sen.dawn.white@capitol.tn.gov", // Dawn White (R)
  "sen.shane.reeves@capitol.tn.gov", // Shane Reeves (R)
  "sen.paul.bailey@capitol.tn.gov", // Paul Bailey (R)
  "sen.janice.bowling@capitol.tn.gov", // Janice Bowling (R)
  "sen.mark.pody@capitol.tn.gov", // Mark Pody (R)
  "sen.ferrell.haile@capitol.tn.gov", // Ferrell Haile (R)
  "sen.charlane.oliver@capitol.tn.gov", // Charlane Oliver (D)
  "sen.heidi.campbell@capitol.tn.gov", // Heidi Campbell (D)
  "sen.jeff.yarbro@capitol.tn.gov", // Jeff Yarbro (D)
  "sen.bill.powers@capitol.tn.gov", // Bill Powers (R)
  "sen.kerry.roberts@capitol.tn.gov", // Kerry Roberts (R)
  "sen.john.stevens@capitol.tn.gov", // John Stevens (R)
  "sen.ed.jackson@capitol.tn.gov", // Ed Jackson (R)
  "sen.page.walley@capitol.tn.gov", // Page Walley (R)
  "sen.jack.johnson@capitol.tn.gov", // Jack Johnson (R)
  "sen.raumesh.akbari@capitol.tn.gov", // Raumesh Akbari (D)
  "sen.sara.kyle@capitol.tn.gov", // Sara Kyle (D)
  "sen.brent.taylor@capitol.tn.gov", // Brent Taylor (R)
  "sen.paul.rose@capitol.tn.gov", // Paul Rose (R)
  "sen.london.lamar@capitol.tn.gov", // London Lamar (D)
  "rep.john.crawford@capitol.tn.gov", // John Crawford (R)
  "rep.bud.hulsey@capitol.tn.gov", // Bud Hulsey (R)
  "rep.timothy.hill@capitol.tn.gov", // Timothy Hill (R)
  "rep.john.holsclaw@capitol.tn.gov", // John Holsclaw Jr. (R)
  "rep.david.hawk@capitol.tn.gov", // David Hawk (R)
  "rep.tim.hicks@capitol.tn.gov", // Tim Hicks (R)
  "rep.rebecca.alexander@capitol.tn.gov", // Rebecca Alexander (R)
  "rep.jerome.moon@capitol.tn.gov", // Jerome Moon (R)
  "rep.gary.hicks@capitol.tn.gov", // Gary W. Hicks (R)
  "rep.rick.eldridge@capitol.tn.gov", // Rick Eldridge (R)
  "rep.jeremy.faison@capitol.tn.gov", // Jeremy Faison (R)
  "rep.dale.carr@capitol.tn.gov", // Dale Carr (R)
  "rep.robert.stevens@capitol.tn.gov", // Robert Stevens (R)
  "rep.jason.zachary@capitol.tn.gov", // Jason Zachary (R)
  "rep.sam.mckenzie@capitol.tn.gov", // Sam McKenzie (D)
  "rep.michele.carringer@capitol.tn.gov", // Michele Carringer (R)
  "rep.andrew.farmer@capitol.tn.gov", // Andrew Farmer (R)
  "rep.elaine.davis@capitol.tn.gov", // Elaine Davis (R)
  "rep.dave.wright@capitol.tn.gov", // Dave Wright (R)
  "rep.bryan.richey@capitol.tn.gov", // Bryan Richey (R)
  "rep.lowell.russell@capitol.tn.gov", // Lowell Russell (R)
  "rep.dan.howell@capitol.tn.gov", // Dan Howell (R)
  "rep.mark.cochran@capitol.tn.gov", // Mark Cochran (R)
  "rep.kevin.raper@capitol.tn.gov", // Kevin Raper (R)
  "rep.greg.martin@capitol.tn.gov", // Greg Martin (R)
  "rep.patsy.hazlewood@capitol.tn.gov", // Patsy Hazlewood (R)
  "rep.yusuf.hakeem@capitol.tn.gov", // Yusuf Hakeem (D)
  "rep.greg.vital@capitol.tn.gov", // Greg Vital (R)
  "rep.esther.helton@capitol.tn.gov", // Esther Helton (R)
  "rep.ron.travis@capitol.tn.gov", // Ron Travis (R)
  "rep.monty.fritts@capitol.tn.gov", // Monty Fritts (R)
  "rep.john.ragan@capitol.tn.gov", // John Ragan (R)
  "rep.tim.rudd@capitol.tn.gov", // Tim Rudd (R)
  "rep.william.slater@capitol.tn.gov", // William Slater (R)
  "rep.dennis.powers@capitol.tn.gov", // Dennis Powers (R)
  "rep.charlie.baum@capitol.tn.gov", // Charlie Baum (R)
  "rep.kelly.keisling@capitol.tn.gov", // Kelly Keisling (R)
  "rep.iris.rudder@capitol.tn.gov", // Iris Rudder (R)
  "rep.michael.hale@capitol.tn.gov", // Michael Hale (R)
  "rep.ed.butler@capitol.tn.gov", // Ed Butler (R)
  "rep.ryan.williams@capitol.tn.gov", // Ryan Williams (R)
  "rep.paul.sherrell@capitol.tn.gov", // Paul Sherrell (R)
  "rep.william.lamberth@capitol.tn.gov", // William Lamberth (R)
  "rep.johnny.garrett@capitol.tn.gov", // Johnny Garrett (R)
  "rep.clark.boyd@capitol.tn.gov", // Clark Boyd (R)
  "rep.bryan.terry@capitol.tn.gov", // Bryan Terry (R)
  "rep.mike.sparks@capitol.tn.gov", // Mike Sparks (R)
  "rep.bo.mitchell@capitol.tn.gov", // Bo Mitchell (D)
  "rep.aftyn.behn@capitol.tn.gov", // Aftyn Behn (D)
  "rep.justin.jones@capitol.tn.gov", // Justin Jones (D)
  "rep.jason.powell@capitol.tn.gov", // Jason Powell (D)
  "rep.vincent.dixie@capitol.tn.gov", // Vincent B. Dixie (D)
  "rep.john.ray.clemmons@capitol.tn.gov", // John Ray Clemmons (D)
  "rep.bob.freeman@capitol.tn.gov", // Bob Freeman (D)
  "rep.susan.lynn@capitol.tn.gov", // Susan Lynn (R)
  "rep.harold.love@capitol.tn.gov", // Harold Love Jr. (D)
  "rep.caleb.hemmer@capitol.tn.gov", // Caleb Hemmer (D)
  "rep.darren.jernigan@capitol.tn.gov", // Darren Jernigan (D)
  "rep.gino.bulso@capitol.tn.gov", // Gino Bulso (R)
  "rep.pat.marsh@capitol.tn.gov", // Pat Marsh (R)
  "rep.jake.mccalmon@capitol.tn.gov", // Jake McCalmon (R)
  "rep.scott.cepicky@capitol.tn.gov", // Scott Cepicky (R)
  "rep.sam.whitson@capitol.tn.gov", // Sam Whitson (R)
  "rep.sabi.kumar@capitol.tn.gov", // Sabi Kumar (R)
  "rep.ronnie.glynn@capitol.tn.gov", // Ronnie Glynn (D)
  "rep.curtis.johnson@capitol.tn.gov", // Curtis Johnson (R)
  "rep.jody.barrett@capitol.tn.gov", // Jody Barrett (R)
  "rep.clay.doggett@capitol.tn.gov", // Clay Doggett (R)
  "rep.kip.capley@capitol.tn.gov", // Kip Capley (R)
  "rep.kirk.haston@capitol.tn.gov", // Kirk Haston (R)
  "rep.chris.todd@capitol.tn.gov", // Chris Todd (R)
  "rep.jay.reedy@capitol.tn.gov", // Jay Reedy (R)
  "rep.jeff.burkhart@capitol.tn.gov", // Jeff Burkhart (R)
  "rep.tandy.darby@capitol.tn.gov", // Tandy Darby (R)
  "rep.rusty.grills@capitol.tn.gov", // Rusty Grills (R)
  "rep.mary.littleton@capitol.tn.gov", // Mary Littleton (R)
  "rep.brock.martin@capitol.tn.gov", // Brock Martin (R)
  "rep.johnny.shaw@capitol.tn.gov", // Johnny Shaw (D)
  "rep.debra.moody@capitol.tn.gov", // Debra Moody (R)
  "rep.chris.hurt@capitol.tn.gov", // Chris Hurt (R)
  "rep.mark.white@capitol.tn.gov", // Mark White (R)
  "rep.joe.towns@capitol.tn.gov", // Joe Towns (D)
  "rep.jesse.chism@capitol.tn.gov", // Jesse Chism (D)
  "rep.justin.pearson@capitol.tn.gov", // Justin Pearson (D)
  "rep.karen.camper@capitol.tn.gov", // Karen Camper (D)
  "rep.larry.miller@capitol.tn.gov", // Larry Miller (D)
  "rep.justin.lafferty@capitol.tn.gov", // Justin Lafferty (R)
  "rep.gloria.johnson@capitol.tn.gov", // Gloria Johnson (D)
  "rep.torrey.harris@capitol.tn.gov", // Torrey Harris (D)
  "rep.todd.warner@capitol.tn.gov", // Todd Warner (R)
  "rep.g.a.hardaway@capitol.tn.gov", // G. A. Hardaway (D)
  "rep.ron.gant@capitol.tn.gov", // Ron Gant (R)
  "rep.kevin.vaughan@capitol.tn.gov", // Kevin Vaughan (R)
  "rep.gabby.salinas@capitol.tn.gov", // Gabby Salinas (D)
  "rep.john.gillespie@capitol.tn.gov", // John Gillespie (R)
  "rep.antonio.parkinson@capitol.tn.gov", // Antonio Parkinson (D)
  "rep.tom.leatherwood@capitol.tn.gov", // Tom Leatherwood (R)
];

// Email Subject Lines
const subjectLines = [
  "Support Our Workers: Vote YES on H.B. 879/S.B. 818",
  "Protect Tennessee Drivers – Vote YES on H.B. 879/S.B. 818",
  "Pass H.B. 879/S.B. 818: Support Our Rideshare Workforce",
  "A Stronger Economy Starts with YES on H.B. 879/S.B. 818",
  "Tennessee Drivers Need Your Support – Vote YES on H.B. 879/S.B. 818",
  "Fix Rideshare Inequality – Support H.B. 879/S.B. 818",
  "Say YES to Fair Wages – Vote for H.B. 879/S.B. 818",
  "Support Fair Pay & Jobs – Vote YES on H.B. 879/S.B. 818",
];

// Synonym Arrays
const greetings = ["Dear", "To", "Attention"];
const stronglySynonyms = [
  "strongly",
  "firmly",
  "passionately",
  "wholeheartedly",
];
const urgeSynonyms = ["encourage", "implore", "call upon"];
const TennesseansSynonyms = [
  "state workers",
  "Tennessee residents",
  "local drivers",
];
const strugglingSynonyms = [
  "facing hardships",
  "finding it difficult",
  "struggling financially",
];
const acceptingSynonyms = ["taking", "receiving", "working for"];
const lowerSynonyms = ["reduced", "lesser", "undercut"];
const destabilizesSynonyms = ["weakens", "harms", "damages"];
const worsensTrafficSynonyms = [
  "increases congestion",
  "makes traffic worse",
  "exacerbates gridlock",
];
const furthermoreSynonyms = [
  "In addition",
  "Moreover",
  "What’s more",
  "Furthermore",
];
const contributeSynonyms = ["support", "help sustain", "benefit"];
const revenueSynonyms = ["funds", "state income", "tax revenue"];
const fixableSynonyms = ["manageable", "solvable", "correctable"];
const upToCodeSynonyms = ["in line with", "consistent with", "on par with"];
const thanksSynonyms = ["Thank you", "Many thanks", "Thanks"];
const inAdvanceSynonyms = ["ahead of time", "in anticipation", "beforehand"];
const hardworkingConstituentsSynonyms = [
  "dedicated workers",
  "hardworking Tennesseans",
  "diligent community members",
];

function generateRandomEmail() {
  // Choosing random synonyms
  const subject = subjectLines[Math.floor(Math.random() * subjectLines.length)];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const strongly =
    stronglySynonyms[Math.floor(Math.random() * stronglySynonyms.length)];
  const urge = urgeSynonyms[Math.floor(Math.random() * urgeSynonyms.length)];
  const Tennesseans =
    TennesseansSynonyms[Math.floor(Math.random() * TennesseansSynonyms.length)];
  const struggling =
    strugglingSynonyms[Math.floor(Math.random() * strugglingSynonyms.length)];
  const accepting =
    acceptingSynonyms[Math.floor(Math.random() * acceptingSynonyms.length)];
  const lower = lowerSynonyms[Math.floor(Math.random() * lowerSynonyms.length)];
  const destabilizes =
    destabilizesSynonyms[
      Math.floor(Math.random() * destabilizesSynonyms.length)
    ];
  const worsensTraffic =
    worsensTrafficSynonyms[
      Math.floor(Math.random() * worsensTrafficSynonyms.length)
    ];
  const furthermore =
    furthermoreSynonyms[Math.floor(Math.random() * furthermoreSynonyms.length)];
  const contribute =
    contributeSynonyms[Math.floor(Math.random() * contributeSynonyms.length)];
  const revenue =
    revenueSynonyms[Math.floor(Math.random() * revenueSynonyms.length)];
  const fixable =
    fixableSynonyms[Math.floor(Math.random() * fixableSynonyms.length)];
  const upToCode =
    upToCodeSynonyms[Math.floor(Math.random() * upToCodeSynonyms.length)];
  const thanks =
    thanksSynonyms[Math.floor(Math.random() * thanksSynonyms.length)];
  const inAdvance =
    inAdvanceSynonyms[Math.floor(Math.random() * inAdvanceSynonyms.length)];
  const hardworkingConstituents =
    hardworkingConstituentsSynonyms[
      Math.floor(Math.random() * hardworkingConstituentsSynonyms.length)
    ];

  const emailBody = `${greeting} Legislator,

I ${strongly} ${urge} you to vote YES on H.B. 879/S.B. 818, supporting rideshare drivers across the state of Tennessee. Hard-working ${Tennesseans} are ${struggling} to make ends meet because rideshare supply far outweighs demand. 

Out-of-state drivers are ${accepting} ${lower} wages for the same rides as in-state drivers, which ${destabilizes} the state economy, ${worsensTraffic}, and creates undue hardship for our Tennessee drivers. ${furthermore}, out-of-state drivers do not ${contribute} to our economy or pay our taxes, taking ${revenue} away from us while operating in our state with our customers.

The over-saturated market is ${fixable}. Voting YES on this legislation would bring Tennessee ${upToCode} with neighboring states like Georgia, Kentucky, Alabama, and North Carolina, who already require an in-state license to offer rideshare services. The bill makes exceptions for neighboring counties like West Memphis, Arkansas, so that no drivers are forced out of fair work. This bill creates more work opportunities for Tennesseans where they’re needed most.

${thanks} ${inAdvance} for standing up for your ${hardworkingConstituents}.`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(emailBody);
  //const emailLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;
  const emailLink = `mailto:${emailAddresses.join(
    ","
  )}?subject=${encodedSubject}&body=${encodedBody}`;
  window.location.href = emailLink;
}

// Attach the function to a button
document
  .getElementById("sendEmailButton")
  .addEventListener("click", generateRandomEmail);

const bushesTypes = [
  "Lower control arm bushes.",
  "Upper control arm bushes.",
  "Bump stoppers.",
  "Gearbox mountings",
  "Engine mountings",
  "Diff mountings",
  "D- bushes.",
  "Shock pads.",
  "Shock - eyelets/ shock bushes.",
  "Draglink ends.",
  "Centre Track ends.",
  "Tie-rod ends.",
  "Idler arm bushes.",
  "Drop arm bushes.",
  "Disc skimming.",
  "Brake re-bonding.",
  "Brake caliper pins rebushing.",
  "Trackroad ends ball joints.",
  "Lower ball joints.",
  "Upper ball joints.",
  "Rear axel bushes.",
  "Brake pads re-bonding.",
  "Stabilizer link bar bushes.",
  "Sway bar bushes.",
  "Shackle bushes.",
];

const bushesImages = [
  "lowerarm.jpg",
  "upperarm.jpg",
  "bumpstopper.jpg",
  "gearboxmountings.jpg",
  "enginemountings.jpg",
  "diffmount.jpg",
  "dbushes.jpg",
  "shockpads.jpg",
  "shockeyelets.jpg",
  "draglinkends.jpg",
  "centretrackends.jpg",
  "tierodend.jpg",
  "idlerarmbushing.jpg",
  "droparmbushing.jpg",
  "disc.jpg",
  "brakebonding.jpg",
  "brakecaliperpins.jpg",
  "trackrodendsballjoints.jpg",
  "upperballjoint.jpg",
  "lowerballjoints.jpg",
  "rearaxelbushes.jpg",
  "brakepads.jpg",
  "stabilerlinkbarbushes.jpg",
  "sway.jpg",
  "shacklebushes.jpg",
];

function Bush(id, bushName, Image) {
  this.id = id;
  this.bushName = bushName;
  this.Image = Image;
}

//Create a cardlist of bushes
let cardList = bushesTypes.map(
  (type, index) => new Bush(index + 1, type, "/images/bushes.jpg")
);

function Pic(Image) {
  this.Image = Image;
}

let cardimages = bushesImages.map((image) => new Pic(image));

console.log(cardimages);

cardList.forEach((element) => {
  element.Image = "/images/bushes/" + bushesImages[element.id - 1];
});

export default cardList;

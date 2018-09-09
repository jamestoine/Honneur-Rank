const Discord = require("discord.js");
const client = new Discord.Client();

var level;
level = 0;
var titre;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '! rank help') {
    msg.channel.send('! rank set - : pour definir son level remplacer le - ');
    msg.channel.send('! rank down : pour reduire le rank de l autre animal');
    msg.channel.send('! rank up :  pour monter le rank de l autre animal');
    msg.channel.send('! rank level : pour voir le level');
  }
});

client.on('message', msg => {
  if (msg.content === '! rank up') {
    msg.channel.send('Siiphi vient de monter de rank');
	level = level + 1;
	msg.channel.send('il est maintenant rank ' + level);
	check(level);
	msg.channel.send(titre);
	titre = '';
  }
});

client.on('message', msg => {
  if (msg.content === '! rank down') {
    msg.channel.send('Siiphi vient de descendre de rank');
	level = level - 1;
    msg.channel.send('il est maintenant rank ' + level);
	check(level);
	msg.channel.send(titre);
	titre = '';
  }
});

client.on('message', msg => {
  if (msg.content === '! rank level') {
    msg.channel.send('Siiphi est actuelement au Rank ' + level);
	check(level);
	msg.channel.send(titre);
	titre = '';
  }
});

client.on('message', msg => {
  if (msg.content === '! rank run') {
    msg.channel.send('Le Bot tant attendu est Up, il sera amelioré dans le futur');
	msg.channel.send('Merci de Mp Ikar[]s en cas de probleme');

  }
});

client.on('message', msg => {
  if (msg.content.startsWith('! rank set')) {
	  let args = msg.content.split(' ')
	  level = args[3]
	  check(level);
	  msg.channel.send(titre);
	  titre = '';
  }
});

function check(level)
{
if (level == 0) {
	titre = 'Le respect est neutre'
}

if (level == 10) {
	titre = 'Siiphi gagne du respect mais ça reste une sous merde'
}

if (level == 20) {
	titre = 'tiens la mere de siiphi n est peut etre pas une pute finalement ...'
}

if (level == 30) {
	titre = 'wowow c est impossible ça'
}

if (level == 40) {
	titre = 'j ai rien mis j pensais pas que t ateindrai ce niveau de respect '
}

if (level == 50) {
	titre = 'siiphi est le mec avec qui on joue quand ya personne il peut se montrer sympathique'
}

if (level == 60) {
	titre = 'siiphi est un am aam tin c est dur à dire "ami"'
}

if (level == 70) {
	titre = 'siiphi est un pote '
}

if (level == 80) {
	titre = 'siiphi est de bonne compagnie'
}

if (level == 90) {
	titre = 'siiphi est génial '
}

if (level == 100) {
	titre = 'siiphi fait partie de la team en tant que stagiaire'
}
if (level == -10) {
	titre = 'Siiphi n est respecté de personne. Il présente une certaine fragilité.'
}

if (level == -20) {
	titre = 'Siiphi se fait voler son goûter à la récré par un binoclard roux.'
}

if (level == -30) {
	titre = 'Les pigeons ont le réflexe de chier lorsqu ils prennent leur envol. Ou lorsqu ils aperçoivent Siiphi'
}

if (level == -40) {
	titre = 'Toutes les nuits, Siiphi a du mal à dormir à cause des cours de yoga de sa mère. Elle peut s entrainer pendant 24h d affilée.'
}

if (level == -50) {
	titre = 'le père de siiphi est probablement présent sur ce discord'
}

if (level == -60) {
	titre = 'même siiphi pourrait se bolosser si il se croisait dans la rue'
}

if (level == -70) {
	titre = 'en cas d apocalypse zombie siiphi se ferait bouffer en premier, c est la sélection naturelle'
}

if (level == -80) {
	titre = ' siiphi ne mérite aucun respect même les moustiques sont plus utiles'
}

if (level == -90) {
	titre = 'siiphi à été trouvé dans une poubelle étant petit, la police à forcé ses parents à le récup'
}

if (level == -100) {
	titre = 'siiphi est une sous sous merde même la cause lgbt ne veut pas de lui comme porte parole'
}

}


client.login(process.env.BOT_TOKEN);

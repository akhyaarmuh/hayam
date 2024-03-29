import TelegramBot from 'node-telegram-bot-api';

const token = '7063244115:AAFP1Q3QaZeXhCEkqBrmaeG5Hlv9CwEgbhc';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  if (msg.from.username !== 'akhyaarmuh') return;

  const chatId = msg.chat.id;
  const replyText = makeReply(msg.text);

  bot.sendMessage(chatId, replyText);
});

const makeReply = (text) => {
  let replyText = '';
  const belakang = [];
  const ban = [];
  const ehen = [];
  const muka = [];
  const bl = [];
  const bn = [];
  const bak = [];
  const mk = [];

  const arrayText = text.split('\n');

  arrayText.forEach((row, i) => {
    if (i > 0 && i < 8) belakang.push(row.slice(2));
    if (i > 8 && i < 16) ban.push(row.slice(2));
    if (i > 16 && i < 24) ehen.push(row.slice(2));
    if (i > 24 && i < 29) muka.push(row.slice(2));
    if (i > 29 && i < 32) bl.push(row.slice(2));
    if (i > 32 && i < 35) bn.push(row.slice(2));
    if (i > 35 && i < 38) bak.push(row.slice(2));
    if (i > 38 && i < 41) mk.push(row.slice(2));
  });

  // belakang
  replyText = `Belakang \n`;
  let totalBelakang = 0;
  belakang.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalBelakang += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalBelakang} \n\n`;

  // ban
  replyText = replyText + `Ban \n`;
  let totalBan = 0;
  ban.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalBan += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalBan} \n\n`;

  // ma ehen
  replyText = replyText + `Ma. Ehen \n`;
  let totalEhen = 0;
  ehen.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalEhen += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalEhen} \n\n`;

  // muka
  replyText = replyText + `Muka \n`;
  let totalMuka = 0;
  muka.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalMuka += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalMuka} \n\n`;

  // bl
  replyText = replyText + `BL \n`;
  let totalBL = 0;
  bl.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalBL += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalBL} \n\n`;

  // bn
  replyText = replyText + `BN \n`;
  let totalBN = 0;
  bn.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalBN += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalBN} \n\n`;

  // bak
  replyText = replyText + `Bak \n`;
  let totalBak = 0;
  bak.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalBak += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalBak} \n\n`;

  // mk
  replyText = replyText + `MK \n`;
  let totalMK = 0;
  mk.forEach((row, i) => {
    const totalRow = getTotalRow(row);
    totalMK += totalRow;
    replyText = replyText + `${i + 1} => ${totalRow} \n`;
  });
  replyText = replyText + `Total => ${totalMK} \n\n`;

  replyText =
    replyText +
    `Total Semua = ${
      totalBelakang +
      totalBan +
      totalEhen +
      totalMuka +
      totalBL +
      totalBN +
      totalBak +
      totalMK
    }`;

  return replyText;
};

const getTotalRow = (row) => {
  const numbers = row.split(' ').map(Number);

  const totalRow = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return totalRow;
};

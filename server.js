require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; 
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/api/send-order', async (req, res) => {
  const { formData, cartItems, total } = req.body;
console.log('Полученные данные:', { formData, cartItems, total });
  if (!formData || !cartItems || typeof total !== 'number') {
    return res.status(400).json({ error: 'Invalid data' });
  }

  const message = `
📦 Новый заказ!

👤 Имя: ${formData.name || 'Не указано'}
📞 Телефон: ${formData.phone || 'Не указан'}
📍 Адрес: ${formData.address || 'Не указан'}
💳 Способ оплаты: ${formData.paymentMethod === 'cash' ? 'Наличные' : 'Перевод'}
💬 Комментарий: ${formData.comment || 'Нет комментария'}

🛒 Товары:
${cartItems.map((item) => {
  const name = item.title || 'Неизвестный товар';
  const price = parseFloat(item.price) || 0;
  const quantity = parseFloat(item.quantity) || 0;
  const size = item.size || '';
  const itemTotal = (price * quantity).toFixed(2);
  const formattedQuantity = quantity % 1 === 0 ? quantity : quantity.toFixed(2);
  return `• ${name} (${size}) x ${formattedQuantity} — ${itemTotal} руб`;
}).join('\n')}

💰 Итого: ${total.toFixed(2)} руб
`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Telegram send error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to send message to Telegram' });
  }
});

app.get('/test', async (req, res) => {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: 'Тестовое сообщение от сервера!'
    });

    res.send('Сообщение успешно отправлено в Telegram!');
  } catch (err) {
    console.error('Ошибка:', err.response?.data || err.message);
    res.send('Ошибка: ' + (err.response?.data.description || err.message));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
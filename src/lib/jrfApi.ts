const API = 'https://nrkg7cmta3.execute-api.ap-south-1.amazonaws.com/dev/my-portfolio-api';

const call = async (body: object) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  // API Gateway AWS type returns body as string
  return typeof data.body === 'string' ? JSON.parse(data.body) : data;
};

export const verifyPasskey = (passkey: string) =>
  call({ action: 'verify_passkey', passkey });

export const getAllCards = () =>
  call({ action: 'jrf_get_all' });

export const addCard = (passkey: string, card: object) =>
  call({ action: 'jrf_add', passkey, ...card });

export const updateCard = (passkey: string, card: object) =>
  call({ action: 'jrf_update', passkey, ...card });

export const deleteCard = (passkey: string, monthId: string) =>
  call({ action: 'jrf_delete', passkey, monthId });

// @ts-check
const { test, expect } = require('@playwright/test');

test('Login com Sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('taiss4379@gmail.com'); 
  await page.locator('#password').fill('taiss123');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Olá, taiss4379@gmail.com')).toBeVisible();
 
});

test('Login com e-mail inválido @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('taiss4379'); 
  await page.locator('#password').fill('taiss123');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('E-mail inválido.')).toBeVisible();
 
});

test('Login com password inválido @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('taiss437@gmail.com'); 
  await page.locator('#password').fill('ta');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Senha inválida.')).toBeVisible();
});

test ('Login com e-mail e password vazio @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('taiss4379'); 
  await page.locator('#password').fill('taiss');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('E-mail inválido.')).toBeVisible();
  //await expect(page.getByText('Senha inválida.')).toBeVisible();
})
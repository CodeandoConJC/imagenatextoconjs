# Extraer el texto de una imagen utilizando Tesseract.Js v4.0

## Descripción

El siguiente código fue parte de un pequeño proyecto para extraer el texto contenido en una imagen utilizando la Librería Tesseract OCR en su versión 4.0.
El proyecto permite proporcionar una imagen con el texto a obtener, se envia al servidor en el que se encuentra alojado Tesseract y se recibe el posible texto extraído.


## Índice (opcional)

- [Instalación](#instalación)
- [Uso](#uso)
- [Créditos](#créditos)
- [Licencia](#licencia)

## Instalación

No requiere instalación porque se envia la imagen al servidor de Tesseract OCR.
Solo se deben de copiar los archivos necesarios /index.html, /js/index.js

## Uso

1. Seleccione una imagen. 
2. Se muestra la vista previa de la imagen seleccionada.
3. Espere que se llene la barra de progreso HTML
4. Puede copiar el texto mostrado dando clic al botón Copiar Texto

El Servidor utiliza el API:
1. Solicitud API
2. Enviar Imagen a la API
3. Pre-procesamiento de la imagen
4. Extracción de datos de la imagen
5. Conversión de texto (a cualquier formato texto simple, PDF, HTML)
6. Se recibe la respuesta de la API


## Crédito

Tesseract es una librería de OCR( Optical Character Recognition / reconocimiento óptico de caracteres) de código abierto y uso gratuito. Ha sido adquirido por Google (originalmente pertenecía a Hewlett-Packard) y nombrado como “Google Tesseract OCR”.

## Licencia

MIT License

Copyright (c) 2023 Javier Chuc/CodeandoConJC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


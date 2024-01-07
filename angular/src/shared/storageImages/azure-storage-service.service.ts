import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AzureStorageService {
  private accountName = 'devstoreaccount1'; // Substitua com o nome da sua conta Azure Storage
  private containerName = 'imagescrud'; // Substitua com o nome do seu container no Azure Storage
  private sas = '?sv=2023-01-03&ss=btqf&srt=sco&spr=https%2Chttp&st=2024-01-07T20%3A53%3A11Z&se=2025-06-21T20%3A53%3A00Z&sp=rwdxftlacup&sig=IivW1DiM5Zzfqn3LTJjA2Sd%2BLctNP9wffquRUu%2FDLZs%3D'; // Substitua com sua SAS (Shared Access Signature)

  constructor() {}

  async uploadFile(file: File) {
    const blobServiceUrl = `http://127.0.0.1:10000/devstoreaccount1`;
    const containerUrl = `${blobServiceUrl}/${this.containerName}`;
    const fullUrl = `${containerUrl}/${encodeURIComponent(file.name)}${this.sas}`;

    const response = await fetch(fullUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'x-ms-blob-type': 'BlockBlob', // Indica que estamos lidando com um bloco de blob
        'Content-Type': file.type
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }

    return fullUrl;
  }
}

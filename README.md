# Oracle DBA Guides - Blog

Bu proje, Oracle Veritabanı Yöneticileri için teknik dökümanlar, sorun giderme rehberleri ve en iyi uygulamaları içeren bir blog sitesidir. [Docusaurus](https://docusaurus.io/) v3 kullanılarak oluşturulmuştur.

## Özellikler

- 🚀 **Hızlı ve Modern**: Docusaurus 3 ile inşa edildi.
- 📱 **Responsive**: Mobil uyumlu ve ekranın tamamını kullanan (full-width) tasarım.
- 🔍 **SEO Dostu**: Blog gönderileri için optimize edilmiş meta etiketler.
- 💻 **Syntax Highlighting**: SQL, PL/SQL ve Bash için gelişmiş kod görünümü.
- 🌑 **Karanlık Mod**: Göz yormayan Dark Mode desteği.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/kullanici-adi/oracle-dba-guides.git
   cd oracle-dba-guides
   ```

2. Bağımlılıkları kurun (Bun önerilir):
   ```bash
   bun install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   bun run start
   ```

Site varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## Yeni Yazı Ekleme

Yeni bir blog yazısı eklemek için `blog/` dizini altına `.mdx` uzantılı bir dosya oluşturun ve frontmatter verilerini girin:

```markdown
---
title: "Yazı Başlığı"
description: "Kısa açıklama"
date: 2026-01-16
authors: [author_id]
tags: [oracle, dba]
---
```

## Dağıtım (Deployment)

Projeyi statik olarak derlemek için:
```bash
bun run build
```
Oluşan `build/` dizinini herhangi bir statik hosting (GitHub Pages, Vercel, Netlify) üzerinden yayınlayabilirsiniz.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

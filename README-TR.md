# React EaselJS Çizim Uygulaması

Bu proje, React ve EaselJS kullanılarak şekiller (dikdörtgenler, daireler, çizgiler) ekleyip, seçip, taşıyıp, silebileceğiniz bir çizim uygulamasıdır. Aynı zamanda şekil verilerini JSON formatında dışa aktarabilir ve JSON formatında içe aktarabilirsiniz.

## Özellikler

- Dikdörtgen, Daire ve Çizgi ekleme (rastgele renklerle).
- Şekilleri tek tek seçebilme ve taşıyabilme.
- Silme tuşları ile seçilen şekli veya tüm şekilleri silebilme.
- Şekil verilerini JSON formatında dışa aktarma ve içe aktarma.
- Dinamik sahne güncelleme ile her hareketin canlı takibi.

## Kullanılan Teknolojiler

- React: Kullanıcı arayüzleri geliştirmek için kullanılan ön uç kütüphanesi.
- EaselJS: HTML5 canvas öğesi ile çalışan, etkileşimli grafikler oluşturmayı sağlayan bir kütüphane.
- UUID: Şekiller için benzersiz kimlikler (ID) oluşturmak amacıyla kullanılır.
- HTML5 File API: JSON verilerini içe aktarma ve dışa aktarma işlemlerinde kullanılır.

### Kurulum

1. Clone the repository:

```bash git clone <repository-url> ```

2. Navigate to the project directory:

```bash cd react-easeljs-drawing-app```

3.Install dependencies: Ensure you have Node.js installed, then run:

```bash npm install ```

4.Start the development server:

```bash  npm start ```

5.Open your browser: The application will be available at http://localhost:3000.
 

### Kullanım

- Şekil Ekleme: Dikdörtgen, daire veya çizgi eklemek için ilgili düğmelere tıklayın.
- Şekil Seçimi: Bir şekle tıklayarak seçin. Seçilen şeklin rengi kırmızıya dönüşecektir.
- Şekil Taşıma: Seçilen şekilleri sürükleyip bırakarak hareket ettirin.
- Şekil Silme: Seçilen şekli silmek için "Delete Selected Shape" butonuna, tüm şekilleri silmek için "Delete All Shapes" butonuna tıklayın.
- Dışa Aktarma: Şekilleri bir JSON dosyasına dışa aktarmak için "Export to JSON" düğmesine tıklayın.
- İçe Aktarma: JSON dosyasını içe aktarmak için dosya seçme kutusunu kullanın.

### Proje Yapısı

-  App.js: Şekil oluşturma, seçme, taşıma, silme işlemlerini yöneten React bileşeni. EaselJS sahnesini kullanarak şekillerin yönetimini sağlar.
-  EaselJS kullanılarak şekillerin canvas üzerinde çizilmesi ve etkileşimli hale getirilmesi sağlanır.

### Klavye Kısayolları

- Delete: : Seçilen şekilleri siler.

### Gelecek İyileştirmeler

- Şekil boyutlandırma işlevselliği eklenebilir.
- Şekillerin gruplar halinde seçilmesi ve toplu düzenleme yapılması sağlanabilir.
- Geri alma/yineleme işlemleri için daha karmaşık bir yapı eklenebilir.

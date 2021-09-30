---
title: "Kod: neden ve nasıl"
excerpt: "Sanırım bir çoğumuz kod yazmayı bir sınıfta, online bir derste veya bir makaleyi takip ederek öğrenmeye başladık. İlk birkaç saat içinde bilgisayara laf anlatabildiğimizi görünce heyecanlanmış ve öğrendiğimiz şeyin hızlıca çıktısını alınca eminim tatminiyet duygusunu da yaşadık..."
coverImage: ""
date: "July 11, 2021"
author:
  name: Ege Cavusoglu
  picture: ""
ogImage:
  url: ""
---

Sanırım bir çoğumuz kod yazmaya bir sınıfta, online bir derste veya bir makaleyi takip ederek öğrenmeye başladık. İlk birkaç saat içinde bilgisayara laf anlatabildiğimizi görünce heyecanlanmış ve öğrendiğimiz şeyin hızlıca çıktısını alınca eminim tatminiyet duygusunu da yaşadık. Ancak dikkat edersiniz yazdığınız bir banka class’ının, bir web sayfasına çizdiğimiz kutucukların veya terminale yazdırdığımız bir yazının gerçek hayatta nasıl bir karşılığı olduğunu pek anlamıyoruz. Bundan da önce bu kod parçasını nasıl diğer kullanıcılarla paylaşacağımızı, hatta arkadaşımızın bilgisayarında nasıl çalışacağını bile bilmek zor. Şu soruyu kendime sorduğumu hatırlıyorum: ‘Bu zamana kadar benim bilgisayarımda Java veya başka bir şey yüklemeden nasıl bu kadar uygulamayı çalıştırabilmişim ben?’ Anlayacağınız üzere bu işte yerine oturmayan taşlar vardı.

Aslında bu yazıda dikkat çekmek istediğim nokta birçok yazılım öğrencisinin benim gibi zor yolu seçip bu soruların hepsini kendi kendine sorup araştırmadığını bildiğim için onların neden kod yazarken motivasyonlarının azaldığını düşündüğümü anlatmak.
Şu an bir programlama dili öğrenmeden önce kendime ilk sorduğum soru şu:

- Bu programlama dili ne tarz işlerde kullanılıyor, avantajları neler?

Aslında bu sorunun altında yatan güzel bir mesaj var: Kod bizim problemleri çözerken kullandığımız bir araç, ona başka anlamlar yüklemek anlamsız. Mesela yazı yazmak bazı kuralları ve bilgileri somutlaştırmanın ötesinde, bazen sadece günlük yazıp kendimizle sohbet ederken de kullanılabilir. Ancak kod yazmanın yazı yazmaktan farklı olarak yegâne bir amacı olması gerektiğini düşünüyorum. Bunu iyi kavramazsak kendi zevkimiz için kod yazmaya başlıyoruz ve uzun vadede bu iyi bir mühendis olmanın önüne geçiyor çünkü problem çözmektense kod yazmaya odaklandığımızı fark ediyoruz.

Bu kısmı geçmeden önce son zamanda yapay zeka ve sanat üzerine yapılan çalışmalar için küçük bir parantez açıp bunun çok heyecan verici olduğunu belirtmek isterim. Çok keyif alarak takip etmekle beraber önceki paragrafta anlattığım konuyla çelişir bir durumda olmadığını düşünüyorum. Belki zaman içerisinde neden kod yazdığımız konusunda farklı fikirler ve nedenler ortaya çıkacaktır ama ben halâ programlamaya giriş dersinde yazdığımız uygulamaların sadece bir sorunu çözme amacıyla yazıldığını varsayıyorum. 😄
Kod yazmanın ne amaçla yapıldığını anladıktan sonra anlaşılması gereken bir diğer konu bunu nasıl çalıştırdığımız. IDE’deki ‘Run’ tuşuna basmak veya terminalden ezberlediğimiz komutları çalıştırmaktan değil, programlama ile hiç alakası olmayan bir kullanıcının bununla nasıl etkileşime gireceğinden bahsediyorum. ‘Compile edilmek’, ‘machine code’a çevirilmek’, ‘interpreted diller’ gibi konulardan da bahsetmiyorum. Çünkü konsola ‘Hello world!’ yazdırırken emin olun ki bunları anlayacak bir seviyede olmak mümkün değil. Burda aslında yatan çok daha önemli bir tema var: dependency (bağımlılık) yönetimi. Yani yazdığım kod benim bilgisayarımda çalıştı ama hangi programlar yüklü olduğu için çalıştı, veya ben başkasının yazdığı bu kütüphaneyi nasıl kullandım? Bu kodu diğer insanlar da çalıştırmak isterse hangi gereksinimleri karşılamaları lazım gibi soruların cevapları çok daha önemli bana sorarsanız. Bu soruların cevapları kodumuzun nasıl ve hangi ortamlarda çalıştığını anlamamızı, dependency’leriyle paketlenmiş çok daha sağlıklı programlar yazmak için çok kıymetli. Mesela birçoğumuzun başladığı Python dilinde yazdığımız bir script’i programlama öğrenmeyen bir arkadaşımızın bilgisayarında nasıl çalıştırırız. Eğer projede harici bir kütüphane kullanmışsak bu programı çalıştıran herkesin önce bu paketi yüklemesini onlara nasıl anlatabiliriz. Veya anlatmadan bunu otomatik bir şekilde yapmak mümkün mü? İyi bir haber vereyim, kesinlikle mümkün arkadaşlar, hatta gerekli. Başka bir blogda bundan bahsederim belki.

Bu soruların cevabını anlamak kendine güvenen, kod yazma becerisi ile hangi sorunları hangi ölçekte çözeceğini anlayan yazılımcılar olmamız mümkün. Becerimizin sınırlarını ve onunla ne yapabileceğimizi anlamak aslında onu büyütmek için çok daha motive edici oluyor. Yaklaşık 4 senelik kod yazma maceramda sanırım en hızlı gelişmeyi ve keyfi bu soruları cevapladıktan sonra aldığım için bunu gönül rahatlığıyla söyleyebilirim.

Umarım bu blog yazısıyla doğru soruları sormanızda ufak bir katkım olmuştur, görüşmek üzere. 👋

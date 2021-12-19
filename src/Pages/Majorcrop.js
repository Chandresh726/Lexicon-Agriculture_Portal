import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  Form,
  Card,
} from "react-bootstrap";

const Majorcrop = () => {
  const [Majorcrop, setMajorcrop] = useState("");
  const [open, setOpen] = useState(false);
  const handleselect = (e) => {
    e.preventDefault();
  };
  const printmajorcrop = (m) => {
    const Wheatdata = [];
    Wheatdata.push(
      <div>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            About wheat
          </Card.Title>
          <Card.Body>
            Wheat is the main cereal crop in India. The total area under the
            crop is about 29.8 million hectares in the country. The production
            of wheat in the country has increased significantly from 75.81
            million MT in 2006-07 to an all time record high of 94.88 million MT
            in 2011-12. The productivity of wheat which was 2602 kg/hectare in
            2004-05 has increased to 3140 kg/hectare in 2011-12. The major
            increase in the productivity of wheat has been observed in the
            states of Haryana, Punjab and Uttar Pradesh. Higher area coverage is
            reported from MP in recent years.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                भारत में गेहूं मुख्य अनाज की फसल है। के अंतर्गत कुल क्षेत्रफल
                देश में फसल लगभग 29.8 मिलियन हेक्टेयर है। उत्पादन देश में गेहूं
                की मात्रा 75.81 . से काफी बढ़ गई है 2006-07 में 94.88 मिलियन
                मीट्रिक टन के अब तक के रिकॉर्ड उच्च स्तर पर पहुंच गया 2011-12
                में। गेहूँ की उत्पादकता जो 2602 किग्रा/हेक्टेयर थी 2004-05
                2011-12 में बढ़कर 3140 किलोग्राम प्रति हेक्टेयर हो गया है।
                प्रमुख में गेहूँ की उत्पादकता में वृद्धि देखी गई है हरियाणा,
                पंजाब और उत्तर प्रदेश राज्य। उच्च क्षेत्र कवरेज है हाल के वर्षों
                में एमपी से रिपोर्ट की गई।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Climate requirement
          </Card.Title>
          <Card.Body>
            Wheat crop has wide adaptability. It can be grown not only in the
            tropical and sub-tropical zones, but also in the temperate zone and
            the cold tracts of the far north ,beyond even the 60 degree north
            altitude . Wheat can tolerate severe cold and snow and resume growth
            with the setting in of warm weather in spring .It can be cultivated
            from sea level to as high as 3300 meters.The best wheat are produced
            in areas favoured with cool, moist weather during the major portion
            of the growing period followed by dry, warm weather to enable the
            grain to ripen properly. The optimum temperature range for ideal
            germination of wheat seed is 20-25 C though the seeds can germinate
            in the temperature range 3.5 to 35 c. Rains just after sowing hamper
            germination and encourage seedling blight. Areas with a warm and
            damp climate are not suited for wheat growing.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                गेहूं की फसल में व्यापक अनुकूलन क्षमता होती है। इसे न केवल में
                उगाया जा सकता है उष्णकटिबंधीय और उपोष्णकटिबंधीय क्षेत्र, लेकिन
                समशीतोष्ण क्षेत्र में भी और सुदूर उत्तर के ठंडे इलाके, 60 डिग्री
                उत्तर से भी आगे ऊंचाई । गेहूं भीषण ठंड और हिमपात को सहन कर सकता
                है और विकास फिर से शुरू कर सकता है वसंत ऋतु में गर्म मौसम की
                स्थापना के साथ। इसकी खेती की जा सकती है समुद्र तल से 3300 मीटर
                की ऊँचाई तक। सर्वोत्तम गेहूँ का उत्पादन किया जाता है प्रमुख भाग
                के दौरान ठंडे, नम मौसम के अनुकूल क्षेत्रों में बढ़ने की अवधि के
                बाद शुष्क, गर्म मौसम को सक्षम करने के लिए अनाज ठीक से पकने के
                लिए। आदर्श के लिए इष्टतम तापमान रेंज गेहूँ के बीज का अंकुरण
                20-25 C होता है, हालाँकि बीज अंकुरित हो सकते हैं तापमान रेंज में
                3.5 से 35 सी। बिजाई के तुरंत बाद बारिश अंकुरण और अंकुर तुड़ाई को
                प्रोत्साहित करना। गर्म और वाले क्षेत्र नम जलवायु गेहूँ उगाने के
                लिए अनुकूल नहीं होती है।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Soil
          </Card.Title>
          <Card.Body>
            Wheat is grown in a variety of soils of India. Soils with a clay
            loam or loam texture, good structure and moderate water holding
            capacity are ideal for wheat cultivation. Care should be taken to
            avoid very porous and excessively drained oils. Soil should be
            neutral in its reaction. Heavy soil with good drainage are suitable
            for wheat cultivation under dry conditions. These soils absorb and
            retain rain water well. Heavy soils with poor structure and poor
            drainage are not suitable as wheat is sensitive to water logging.
            Wheat can be successfully grown on lighter soils provided their
            water and nutrient holding capacity are improved.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                गेहूं भारत की विभिन्न मिट्टी में उगाया जाता है। मिट्टी के साथ
                मिट्टी दोमट या दोमट बनावट, अच्छी संरचना और मध्यम जल धारण क्षमता
                गेहूं की खेती के लिए आदर्श है। ध्यान रखना चाहिए बहुत झरझरा और
                अत्यधिक सूखा तेल से बचें। मिट्टी होनी चाहिए अपनी प्रतिक्रिया में
                तटस्थ। अच्छी जल निकासी वाली भारी मिट्टी उपयुक्त होती है शुष्क
                परिस्थितियों में गेहूं की खेती के लिए। ये मिट्टी अवशोषित करती है
                और बारिश के पानी को अच्छी तरह से बनाए रखें। खराब संरचना वाली
                भारी मिट्टी और खराब जल निकासी उपयुक्त नहीं है क्योंकि गेहूं
                जलभराव के प्रति संवेदनशील है। गेहूँ को हल्की मिट्टी में
                सफलतापूर्वक उगाया जा सकता है बशर्ते कि उनका पानी और पोषक तत्व
                धारण क्षमता में सुधार होता है।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Nutrient management
          </Card.Title>
          <Card.Body>
            With intensive agriculture, deficiency of essential nutrients has
            also become wide spread. The work conducted under the All India
            Coordinated Research Project on Micronutrient in Crops and Soils,
            has shown wide spread deficiency of zinc in soils in India. At the
            national level, the deficiency level in micro nutrients is Zn: 46 %,
            B: 17 %, Mo: 12 %, Fe: 11 % and Cu: 5%. The deficiency of sulphur
            has also been reported across a wide range of soils (38%).The yield
            response to sulphur has been obtained in more than 40 crops
            including cereal, millets, oilseeds and pulses etc. To realize the
            potential yield, strategies may include
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                गहन कृषि के साथ, आवश्यक पोषक तत्वों की कमी हो गई है भी व्यापक हो
                जाते हैं। अखिल भारतीय के तहत किए गए कार्य फसलों और मिट्टी में
                सूक्ष्म पोषक तत्व पर समन्वित अनुसंधान परियोजना, भारत में मिट्टी
                में जिंक की व्यापक कमी देखी गई है। पर राष्ट्रीय स्तर पर सूक्ष्म
                पोषक तत्वों की कमी का स्तर Zn: 46% है, बी: 17%, मो: 12%, फे: 11%
                और क्यू: 5%। सल्फर की कमी मिट्टी की एक विस्तृत श्रृंखला (38%)
                में भी सूचित किया गया है। उपज सल्फर की प्रतिक्रिया 40 से अधिक
                फसलों में प्राप्त हुई है अनाज, बाजरा, तिलहन और दलहन आदि सहित। को
                साकार करने के लिए संभावित उपज, रणनीतियों में शामिल हो सकते हैं
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    );
    const Maizedata = [];
    Maizedata.push(
      <div>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            About Maize
          </Card.Title>
          <Card.Body>
            Maize (Zea mays L) is one of the most versatile emerging crops
            having wider adaptability under varied agro-climatic conditions.
            Globally, maize is known as queen of cereals because it has the
            highest genetic yield potential among the cereals. It is cultivated
            on nearly 150 m ha in about 160 countries having wider diversity of
            soil, climate, biodiversity and management practices that
            contributes 36 % (782 m t) in the global grain production. The
            United States of America (USA) is the largest producer of maize
            contributes nearly 35 % of the total production in the world and
            maize is the driver of the US economy. The USA has the highest
            productivity (&gt; 9.6 t ha-1 ) which is double than the global
            average (4.92 t ha-1). Whereas, the average productivity in India is
            2.43 t ha-1 In India, maize is the third most important food crops
            after rice and wheat. According to advance estimate its production
            is likely to be 22.23 M Tonnes (2012-13) mainly during Kharif season
            which covers 80% area. Maize in India, contributes nearly 9 % in the
            national food basket. In addition to staple food for human being and
            quality feed for animals, maize serves as a basic raw material as an
            ingredient to thousands of industrial products that includes starch,
            oil, protein, alcoholic beverages, food sweeteners, pharmaceutical,
            cosmetic, film, textile, gum, package and paper industries etc.The
            maize is cultivated throughout the year in all states of the country
            for various purposes including grain, fodder, green cobs, sweet
            corn, baby corn, pop corn in peri-urban areas. The predominant maize
            growing states that contributes more than 80 % of the total maize
            production are Andhra Pradesh (20.9 %), Karnataka (16.5 %),
            Rajasthan (9.9 %), Maharashtra (9.1 %), Bihar (8.9 %), Uttar Pradesh
            (6.1 %), Madhya Pradesh (5.7 %), Himachal Pradesh (4.4 %). Apart
            from these states maize is also grown in Jammu and Kashmir and
            North-Eastern states. Hence, the maize has emerged as important crop
            in the non-traditional regions i.e. peninsular India as the state
            like Andhra Pradesh which ranks 5th in area (0.79 m ha) has recorded
            the highest production (4.14 m t) and productivity (5.26 t ha-1 ) in
            the country although the productivity in some of the districts of
            Andhra Pradesh is more or equal to the USA.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                मक्का (Zea mays L) सबसे बहुमुखी उभरती हुई फसलों में से एक है
                विभिन्न कृषि-जलवायु परिस्थितियों में व्यापक अनुकूलन क्षमता होना।
                विश्व स्तर पर, मक्का को अनाज की रानी के रूप में जाना जाता है
                क्योंकि इसमें अनाज के बीच उच्चतम आनुवंशिक उपज क्षमता। इसकी खेती
                की जाती है की व्यापक विविधता वाले लगभग 160 देशों में लगभग 150
                मीटर हेक्टेयर पर मिट्टी, जलवायु, जैव विविधता और प्रबंधन प्रथाओं
                कि वैश्विक अनाज उत्पादन में 36% (782 मिलियन टन) का योगदान देता
                है। संयुक्त राज्य अमेरिका (यूएसए) मक्का का सबसे बड़ा उत्पादक है
                दुनिया में कुल उत्पादन का लगभग 35% योगदान देता है और मक्का
                अमेरिकी अर्थव्यवस्था का चालक है। संयुक्त राज्य अमेरिका में सबसे
                ज्यादा है उत्पादकता (&gt; 9.6 t ha-1 ) जो वैश्विक . से दोगुनी है
                औसत (4.92 टन हेक्टेयर -1)। जबकि, भारत में औसत उत्पादकता है 2.43
                t ha-1 भारत में, मक्का तीसरी सबसे महत्वपूर्ण खाद्य फसल है चावल
                और गेहूं के बाद। अग्रिम अनुमान के अनुसार इसका उत्पादन मुख्य रूप
                से खरीफ मौसम के दौरान 22.23 एम टन (2012-13) होने की संभावना है
                जो 80% क्षेत्र को कवर करता है। भारत में मक्का, लगभग 9% योगदान
                देता है राष्ट्रीय खाद्य टोकरी। मनुष्य के लिए मुख्य भोजन के अलावा
                और पशुओं के लिए गुणवत्तापूर्ण चारा, मक्का एक बुनियादी कच्चे माल
                के रूप में कार्य करता है स्टार्च सहित हजारों औद्योगिक उत्पादों
                का संघटक, तेल, प्रोटीन, मादक पेय, खाद्य मिठास, दवा, कॉस्मेटिक,
                फिल्म, कपड़ा, गोंद, पैकेज और कागज उद्योग आदि देश के सभी राज्यों
                में मक्के की खेती साल भर की जाती है अनाज, चारा, हरी चोंच, मिठाई
                सहित विभिन्न प्रयोजनों के लिए उपनगरीय क्षेत्रों में मकई, बेबी
                कॉर्न, पॉप कॉर्न
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    );
    const Ricedata = [];
    Ricedata.push(
      <div>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            About Rice
          </Card.Title>
          <Card.Body>
            Oryza Sativa, it is believed, is associated with wet, humid climate,
            though it is not a tropical plant. It is probably a descendent of
            wild grass that was most likely cultivated in the foothills of the
            far Eastern Himalayas. Another school of thought believes that the
            rice plant may have originated in southern India, then spread to the
            north of the country and then onwards to China. It then arrived in
            Korea, the Philippines (about 2000 B. C.) and then Japan and
            Indonesia (about 1000 B. C.).The journey of rice around the world
            has been slow, but once it took root it stayed and became a major
            agriculture and economic product for the people . In the Indian
            subcontinent more than a quarter of the cultivated land is given to
            rice (20011-12). It is a very essential part of the daily meal in
            the southern and eastern parts of India. In the northern and central
            parts of the subcontinent, where wheat is frequently eaten, rice
            holds its own and is cooked daily as well as on festivals and
            special occasions.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                ऐसा माना जाता है कि ओरीज़ा सैटिवा गीली, आर्द्र जलवायु से जुड़ा
                हुआ है, हालांकि यह एक उष्णकटिबंधीय पौधा नहीं है। यह शायद का वंशज
                है जंगली घास जिसकी खेती की तलहटी में सबसे अधिक संभावना थी सुदूर
                पूर्वी हिमालय। विचार के एक अन्य स्कूल का मानना है कि चावल के
                पौधे की उत्पत्ति दक्षिण भारत में हो सकती है, फिर फैल गया देश के
                उत्तर में और फिर चीन के आगे। यह फिर में आ गया कोरिया, फिलीपींस
                (लगभग 2000 ईसा पूर्व) और फिर जापान और इंडोनेशिया (लगभग 1000 ईसा
                पूर्व)। दुनिया भर में चावल की यात्रा धीमा रहा है, लेकिन एक बार
                जड़ लेने के बाद यह बना रहा और एक प्रमुख बन गया लोगों के लिए कृषि
                और आर्थिक उत्पाद। भारत में उपमहाद्वीप में एक चौथाई से अधिक खेती
                योग्य भूमि को दिया जाता है चावल (20011-12)। यह दैनिक भोजन का एक
                बहुत ही आवश्यक हिस्सा है भारत के दक्षिणी और पूर्वी भाग। उत्तरी
                और मध्य में उपमहाद्वीप के कुछ हिस्सों, जहां गेहूं अक्सर खाया
                जाता है, चावल अपने आप रखता है और दैनिक और त्योहारों पर भी पकाया
                जाता है और विशेष अवसरों।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            History of Rice in India
          </Card.Title>
          <Card.Body>
            India is an important centre of rice cultivation. The rice is
            cultivated on the largest areas in India. Historians believe that
            while the indica variety of rice was first domesticated in the area
            covering the foothills of the Eastern Himalayas (i.e. north-eastern
            India), stretching through Burma, Thailand, Laos, Vietnam and
            Southern China, the japonica variety was domesticated from wild rice
            in southern China which was introduced to India. Perennial wild rice
            still grow in Assam and Nepal. It seems to have appeared around 1400
            BC in southern India after its domestication in the northern plains.
            It then spread to all the fertile alluvial plains watered by rivers.
            Some says that the word rice is derived from the Tamil word arisi.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                भारत चावल की खेती का एक महत्वपूर्ण केंद्र है। चावल है भारत में
                सबसे बड़े क्षेत्रों में खेती की जाती है। इतिहासकारों का मानना है
                कि जबकि चावल की इंडिका किस्म को पहले क्षेत्र में पालतू बनाया गया
                था पूर्वी हिमालय की तलहटी (अर्थात उत्तर-पूर्वी) भारत), बर्मा,
                थाईलैंड, लाओस, वियतनाम और के माध्यम से फैला दक्षिणी चीन, जपोनिका
                किस्म को जंगली चावल से पालतू बनाया गया था दक्षिणी चीन में जिसे
                भारत में पेश किया गया था। बारहमासी जंगली चावल अभी भी असम और
                नेपाल में बढ़ते हैं। ऐसा प्रतीत होता है लगभग 1400 उत्तरी मैदानों
                में इसके वर्चस्व के बाद दक्षिण भारत में ईसा पूर्व। इसके बाद यह
                नदियों द्वारा सींचे गए सभी उपजाऊ जलोढ़ मैदानों में फैल गया। कुछ
                लोग कहते हैं कि चावल शब्द की उत्पत्ति तमिल शब्द अरिसि से हुई है।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Climatic Requirements
          </Card.Title>
          <Card.Body>
            In India rice is grown under widely varying conditions of altitude
            and climate. Rice cultivation in India extends from 8 to35ºN
            latitude and from sea level to as high as 3000 meters. Rice crop
            needs a hot and humid climate. It is best suited to regions which
            have high humidity, prolonged sunshine and an assured supply of
            water. The average temperature required throughout the life period
            of the crop ranges from 21 to 37º C. Maximum temp which the crop can
            tolerate 400C to 42 0C.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                भारत में चावल ऊंचाई की व्यापक रूप से भिन्न परिस्थितियों में
                उगाया जाता है और जलवायु। भारत में चावल की खेती 8 से 35ºN . तक
                फैली हुई है अक्षांश और समुद्र तल से 3000 मीटर तक ऊँचा। चावल की
                फसल गर्म और आर्द्र जलवायु की जरूरत है। यह उन क्षेत्रों के लिए
                सबसे उपयुक्त है जो उच्च आर्द्रता, लंबे समय तक धूप और सुनिश्चित
                आपूर्ति है पानी। पूरे जीवन काल में आवश्यक औसत तापमान फसल की सीमा
                21 से 37º सी. अधिकतम तापमान जो फसल कर सकते हैं 400C से 42 0C सहन
                करें।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Crop Production Practices
          </Card.Title>
          <Card.Body>
            In India Rice is mainly grown in two types of soils i.e., (i)
            uplands and (ii) low lands. The method of cultivation of rice in a
            particular region depends largely on factors such as situation of
            land, type of soils, irrigation facilities, availability of
            labourers intensity and distribution of rainfalls. The crop of rice
            is grown with the following methods
            <ul>
              <li>Dry or Semi-dry upland cultivation </li>
              <ol>
                <li>Broadcasting the seed</li>
                <li>Sowing the seed behind the plough or drilling</li>
              </ol>
              <li>Wet or lowland cultivation </li>
              <ol>
                <li>Transplanting in puddled fields.</li>
                <li>Broadcasting sprouted seeds in puddled fields</li>
              </ol>
            </ul>
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                भारत में चावल मुख्य रूप से दो प्रकार की मिट्टी में उगाया जाता है
                अर्थात (i) ऊपरी भूमि और (ii) निचली भूमि। चावल की खेती की विधि a
                विशेष क्षेत्र की स्थिति जैसे कारकों पर काफी हद तक निर्भर करता है
                भूमि, मिट्टी के प्रकार, सिंचाई सुविधाएं, उपलब्धता मजदूरों की
                तीव्रता और वर्षा का वितरण। चावल की फसल निम्नलिखित विधियों से
                उगाया जाता है:
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    );

    const Pulsesdata = [];
    Pulsesdata.push(
      <div>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            About Pulses
          </Card.Title>
          <Card.Body>
            Pulses are consumed as Dal, which is a cheap source of plant
            protein. These are consumed because of body building properties
            having presence of various amino acids. These also have medicinal
            properties. By products of pulses like leaves, pod coats and bran
            are given to animals in the form of dry fodder. Some pulse crops
            like Gram, Lobia, Urdbean Moongbean are fed to animals as green
            fodder. Moong plants are also used as green manure which improve
            soil health and adds nutrient into the soil.A number of pulse crops
            are grown in India and world. Among the crops, major ones are Gram,
            Pigeonpea, Lentil, Fieldpeas etc. According to history, the origin
            of Gram is in South West Asia probably Afghanistan and Persia,
            Pigeonpea in Africa, Lentil in Turkey to South Iran and Fieldpeas in
            Mediterranean Region of Southern Europe and Western Asia.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                दालों का सेवन दाल के रूप में किया जाता है, जो पौधे का सस्ता
                स्रोत है प्रोटीन। बॉडी बिल्डिंग गुणों के कारण इनका सेवन किया
                जाता है विभिन्न अमीनो एसिड की उपस्थिति होना। इनमें औषधीय भी है
                गुण। दालों के उत्पाद जैसे पत्ते, पॉड कोट और चोकर पशुओं को सूखे
                चारे के रूप में दिया जाता है। कुछ दलहन फसलें जैसे चना, लोबिया,
                उड़द की मूंग की दाल जानवरों को हरा के रूप में खिलाई जाती है चारा
                मूंग के पौधों का उपयोग हरी खाद के रूप में भी किया जाता है जिससे
                सुधार होता है मृदा स्वास्थ्य और मिट्टी में पोषक तत्व जोड़ता है।
                कई दलहनी फसलें भारत और दुनिया में उगाए जाते हैं। फसलों में
                प्रमुख हैं चना, अरहर, मसूर, मटर आदि इतिहास के अनुसार उत्पत्ति
                दक्षिण पश्चिम एशिया शायद अफगानिस्तान और फारस में ग्राम है,
                अफ्रीका में अरहर, तुर्की से दक्षिण ईरान में मसूर और में फील्डपीस
                दक्षिणी यूरोप और पश्चिमी एशिया का भूमध्यसागरीय क्षेत्र।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ margin: "20px 0" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Important Major Pulses Growing Zones / States in India
          </Card.Title>
          <Card.Body>
            Varietal Development programme of pulses got strengthened in 1967
            with the initiation of All-India Co-ordinated Research Improvement
            Programme. Through this programme, the varieties suitable for across
            the country i.e. agro-climatic zones: Northern Hills Zone – J&K,
            Himachal Pradesh, North West of Uttar Pradesh; North West Plain Zone
            – Haryana, Punjab, Rajasthan, Gujarat, western Uttar Pradesh; North
            East Plain Zone – eastern Uttar Pradesh, Bihar, West Bengal, Assam,
            Tripura, Mizoram, Northern Odisha; Central Zone – Madhya Pradesh,
            Maharashtra, Parts of Karnataka, Andhra Pradesh; South Zone – Andhra
            Pradesh, Tamil Nadu, Kerala, Karnataka and southern Odisha have been
            developed.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                1967 में दलहनों के किस्म विकास कार्यक्रम को मजबूती मिली अखिल
                भारतीय समन्वित अनुसंधान सुधार की शुरुआत के साथ कार्यक्रम। इस
                कार्यक्रम के माध्यम से, सभी के लिए उपयुक्त किस्में देश यानी
                कृषि-जलवायु क्षेत्र: उत्तरी पहाड़ी क्षेत्र - जम्मू और कश्मीर,
                हिमाचल प्रदेश, उत्तर प्रदेश के उत्तर पश्चिम; उत्तर पश्चिम मैदानी
                क्षेत्र - हरियाणा, पंजाब, राजस्थान, गुजरात, पश्चिमी उत्तर
                प्रदेश; उत्तर पूर्वी मैदानी क्षेत्र - पूर्वी उत्तर प्रदेश,
                बिहार, पश्चिम बंगाल, असम, त्रिपुरा, मिजोरम, उत्तरी ओडिशा; मध्य
                क्षेत्र - मध्य प्रदेश, महाराष्ट्र, कर्नाटक के कुछ हिस्सों, आंध्र
                प्रदेश; दक्षिण क्षेत्र - आंध्र प्रदेश, तमिलनाडु, केरल, कर्नाटक
                और दक्षिणी ओडिशा विकसित।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ fontWeight: "700" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Climatic Requirement
          </Card.Title>
          <Card.Body>
            Pulse crops are cultivated in Kharif, Rabi and Zaid seasons of the
            Agricultural year. Rabi crops require mild cold climate during
            sowing period, during vegetative to pod development cold climate and
            during maturity / harvesting warm climate. Similarly, Kharif pulse
            crops require warm climate throughout their life from sowing to
            harvesting. Summer pulses are habitants of warm climate. Seed is
            required to pass many stages to produce seed like germination,
            seedling, vegetative, flowering, fruit setting, pod development and
            grain maturity / harvesting.
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                दलहन फसलों की खेती खरीफ, रबी और जायद के मौसम में की जाती है कृषि
                वर्ष। रबी फसलों के लिए हल्की ठंडी जलवायु की आवश्यकता होती है
                बुवाई की अवधि, वानस्पतिक से फली विकास के दौरान ठंडी जलवायु और
                परिपक्वता/कटाई के दौरान गर्म जलवायु। इसी प्रकार खरीफ दाल फसलों
                को बुवाई से लेकर जीवन भर गर्म जलवायु की आवश्यकता होती है कटाई.
                ग्रीष्म दालें गर्म जलवायु की निवासी होती हैं। बीज है अंकुरण जैसे
                बीज पैदा करने के लिए कई चरणों से गुजरना पड़ता है, अंकुर,
                वनस्पति, फूल, फल सेटिंग, फली विकास और अनाज की परिपक्वता / कटाई।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        <Card style={{ fontWeight: "700" }}>
          <Card.Title style={{ fontWeight: "700", margin: "10px" }}>
            Area, Production And Yield Of Major Pulse Crops Growing States In
            India
          </Card.Title>
          <Card.Body>
            There was 239 lakh ha area in India at triennium ending 2010-11,
            which was mainly contributed by Madhya Pradesh, Rajasthan,
            Maharashtra, Karnataka and Uttar Pradesh. From this area, 158 lakh
            tonnes production of pulse was received. The major contributors of
            this production were Madhya Pradesh, Maharashtra, Uttar Pradesh,
            Rajasthan and Andhra Pradesh. During this period, productivity of
            pulses was recorded as 661 kg / ha with highest in Punjab (905
            kg/ha), Haryana (891), Bihar (839), Uttar Pradesh (823) and West
            Bengal (811).
            <Collapse style={{ margin: "10px" }} in={open}>
              <div id="example-collapse-text">
                2010-11 को समाप्त त्रैवार्षिक में भारत में 239 लाख हेक्टेयर
                क्षेत्र था, जिसमें मुख्य रूप से मध्य प्रदेश, राजस्थान,
                महाराष्ट्र, कर्नाटक और उत्तर प्रदेश। इस क्षेत्र से 158 लाख टन
                दलहन का उत्पादन प्राप्त हुआ। के प्रमुख योगदानकर्ता यह उत्पादन
                मध्य प्रदेश, महाराष्ट्र, उत्तर प्रदेश, राजस्थान और आंध्र प्रदेश।
                इस अवधि के दौरान, की उत्पादकता दालें 661 किग्रा/हेक्टेयर दर्ज की
                गईं, जो पंजाब में सर्वाधिक (905 .) दर्ज की गईं किग्रा /
                हेक्टेयर), हरियाणा (891), बिहार (839), उत्तर प्रदेश (823) और
                पश्चिम बंगाल (811)।
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    );
    if (m === "") {
      return "";
    }
    if (m === "Wheat") {
      return Wheatdata;
    } else if (m === "Maize") {
      return Maizedata;
    } else if (m === "Rice") {
      return Ricedata;
    } else {
      return Pulsesdata;
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h3 className="pageheading">
          Choose one of the major crop to get information
        </h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCrop">
            <Form.Label>Major Crop</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setMajorcrop(e.target.value)}
            >
              <option value="">Select Major crop</option>
              <option value="Wheat">Wheat</option>
              <option value="Maize">Maize</option>
              <option value="Rice">Rice</option>
              <option value="Pulses">Pulses</option>
            </Form.Select>
          </Form.Group>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Hindi
          </Button>
          {printmajorcrop(Majorcrop)}
        </Form>
      </Container>
    </div>
  );
};
export default Majorcrop;

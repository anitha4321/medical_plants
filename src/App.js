import React, { useState } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';
//dont know which plant to grow!!! Lets grow Plants  based on your Health consiousness
// Static data for diseases
const diseasesData = [
  {
    id: 1,
    name: 'Cancer',
    description: 'Lets see which plant can cure Cancer',
    plants: [
      { name: 'Bitter Melon', photo: '/pic1.png' },
      { 
        name: 'Ginseng', 
        photo: 'https://th.bing.com/th/id/OIP.ese6fAjF-drO3oOwTm0t1QHaE7?w=836&h=557&rs=1&pid=ImgDetMain' 
      }
    ]
  },
  {
    id: 2,
    name: 'Diabetes',
    description: 'A group of diseases that affect how your body uses blood sugar.',
    plants: [
      { name: 'Fenugreek', photo: 'https://th.bing.com/th?id=OIP.xY0ZPOT6_iF1Tol_Oma7LwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2' },
      { name: 'Cinnamon', photo: 'https://th.bing.com/th/id/OIP.68MxXlgAZkqSLado250srgHaFj?rs=1&pid=ImgDetMain' }
    ]
  },
  {
    id: 3,
    name: 'High Blood Pressure',
    description: 'A condition where the force of the blood against the artery walls is too high.',
    plants: [
      { name: 'Garlic', photo: 'https://wallpaperaccess.com/full/3601266.jpg' },
      { name: 'Hibiscus', photo: 'https://www.hdwallpaper.nu/wp-content/uploads/2017/03/hibiscus-10.jpg' }
    ]
  },
  {
    id: 4,
    name: 'Asthma',
    description: 'A condition in which your airways narrow and swell and produce extra mucus.',
    plants: [
      { name: 'Ginger', photo: 'https://th.bing.com/th/id/OIP.BkB_YPnRRtSdB2wZoCwuPQAAAA?rs=1&pid=ImgDetMain' },
      { name: 'Turmeric', photo: 'https://i.pinimg.com/originals/d1/f5/c7/d1f5c776baa808570c6409435c93ceb8.jpg' }
    ]
  },
  {
    id: 5,
    name: 'Arthritis',
    description: 'Inflammation of one or more of your joints.',
    plants: [
      { name: 'Turmeric', photo: 'https://i.pinimg.com/originals/d1/f5/c7/d1f5c776baa808570c6409435c93ceb8.jpg' },
      { name: 'Willow Bark', photo: 'https://th.bing.com/th/id/OIP.0IUnOr_mcSimKhVRSHtlHwHaE7?rs=1&pid=ImgDetMain' }
    ]
  },
  {
    id: 6,
    name: 'Influenza',
    description: 'A viral infection that attacks your respiratory system.',
    plants: [
      { name: 'Echinacea', photo: 'https://th.bing.com/th/id/OIP.ovrih1bMwVkAYUV5bDtfqQHaFS?rs=1&pid=ImgDetMain' },
      { name: 'Elderberry', photo: 'https://www.thespruce.com/thmb/6VCxoayqU9lodWZo-gg9uEAEidQ=/4770x3176/filters:fill(auto,1)/what-is-elderberry-herb-1762285-01-089ed306fa17407c946e9aa86521ecc4.jpg' }
    ]
  },
  // Additional diseases up to 100
  {
    id: 7,
    name: 'Gout',
    description: 'A form of arthritis characterized by severe pain, redness, and tenderness in joints.',
    plants: [
      { name: 'Cherry', photo: 'https://www.lovethegarden.com/sites/default/files/content/articles/uk/ripe-cherries-growing-on-cherry-tree.jpg' },
      { name: 'Celery Seed', photo: '/pic14.png' }
    ]
  },
  {
    id: 8,
    name: 'Lupus',
    description: 'An autoimmune disease that affects various parts of the body.',
    plants: [
      { name: 'Turmeric', photo: 'https://i.pinimg.com/originals/d1/f5/c7/d1f5c776baa808570c6409435c93ceb8.jpg' },
      { name: 'Green Tea', photo: '/pic16.png' }
    ]
  },
  {
    id: 9,
    name: 'Celiac Disease',
    description: 'An autoimmune disorder in which ingestion of gluten leads to damage in the small intestine.',
    plants: [
      { name: 'Turmeric', photo: 'https://i.pinimg.com/originals/d1/f5/c7/d1f5c776baa808570c6409435c93ceb8.jpg' },
      { name: 'Ginger', photo: 'https://th.bing.com/th/id/OIP.oG0FPjjsS6nYliPyZQMNHQHaFj?rs=1&pid=ImgDetMain' }
    ]
  },
  {
    id: 10,
    name: 'Gallstones',
    description: 'Solid particles that form in the gallbladder.',
    plants: [
      { name: 'Dandelion', photo: '/pic19.png' },
      { name: 'Milk Thistle', photo: '/pic20.png' }
    ]
  },
  {
    id: 11,
    name: 'Restless Legs Syndrome',
    description: 'An overwhelming urge to move the legs, usually due to uncomfortable sensations.',
    plants: [
      { name: 'Ginger', photo: 'https://th.bing.com/th/id/OIP.oG0FPjjsS6nYliPyZQMNHQHaFj?rs=1&pid=ImgDetMain' },
      { name: 'Magnesium', photo: '/pic22.png' }
    ]
  },
  {
    id: 12,
    name: 'Psoriasis',
    description: 'A condition in which skin cells build up and form scales and itchy, dry patches.',
    plants: [
      { name: 'Aloe Vera', photo: '/pic23.png' },
      { name: 'Turmeric', photo: '/pic24.png' }
    ]
  },
  {
    id: 13,
    name: 'Menstrual Pain',
    description: 'Pain associated with menstruation.',
    plants: [
      { name: 'Ginger', photo: '/pic25.png' },
      { name: 'Fennel', photo: '/pic26.png' }
    ]
  },
  {
    id: 14,
    name: 'Back Pain',
    description: 'Pain located in the back.',
    plants: [
      { name: 'Turmeric', photo: '/pic27.png' },
      { name: 'Willow Bark', photo: '/pic28.png' }
    ]
  },
  {
    id: 15,
    name: 'Cough',
    description: 'A sudden, forceful hacking sound to release air and clear an irritation in the throat or airway.',
    plants: [
      { name: 'Honey', photo: '/pic29.png' },
      { name: 'Thyme', photo: '/pic30.png' }
    ]
  },
  {
    id: 16,
    name: 'Cold',
    description: 'A common viral infection that affects the nose and throat.',
    plants: [
      { name: 'Echinacea', photo: 'https://th.bing.com/th/id/OIP.p2_WbwFcSsavnOMv_VhfwgHaFj?rs=1&pid=ImgDetMain' },
      { name: 'Ginger', photo: 'https://th.bing.com/th/id/OIP.oG0FPjjsS6nYliPyZQMNHQHaFj?rs=1&pid=ImgDetMain' }
    ]
  },
  {
    id: 17,
    name: 'Anxiety',
    description: 'A feeling of worry, nervousness, or unease about something with an uncertain outcome.',
    plants: [
      { name: 'Valerian Root', photo: '/pic33.png' },
      { name: 'Chamomile', photo: '/pic34.png' }
    ]
  },
  {
    id: 18,
    name: 'Depression',
    description: 'A mood disorder that causes a persistent feeling of sadness and loss of interest.',
    plants: [
      { name: 'St. John\'s Wort', photo: '/pic35.png' },
      { name: 'Saffron', photo: '/pic36.png' }
    ]
  },
  {
    id: 19,
    name: 'Digestive Disorders',
    description: 'Disorders affecting the digestive system.',
    plants: [
      { name: 'Peppermint', photo: 'https://th.bing.com/th/id/OIP.p2_WbwFcSsavnOMv_VhfwgHaFj?rs=1&pid=ImgDetMain' },
      { name: 'Ginger', photo: 'https://th.bing.com/th/id/OIP.oG0FPjjsS6nYliPyZQMNHQHaFj?rs=1&pid=ImgDetMain' }
    ]
  },
  {
    id: 20,
    name: 'Allergies',
    description: 'An immune system response to a foreign substance.',
    plants: [
      { name: 'Nettle', photo: '/pic39.png' },
      { name: 'Quercetin', photo: '/pic40.png' }
    ]
  },
  // Continue adding up to 100 diseases
  {
    id: 21,
    name: 'Kidney Stones',
    description: 'Small, hard deposits that form in the kidneys.',
    plants: [
      { name: 'Dandelion', photo: '/pic41.png' },
      { name: 'Nettle', photo: '/pic42.png' }
    ]
  },
  {
    id: 22,
    name: 'Eczema',
    description: 'A condition that makes the skin red and inflamed.',
    plants: [
      { name: 'Aloe Vera', photo: '/pic43.png' },
      { name: 'Chamomile', photo: '/pic44.png' }
    ]
  },
  {
    id: 23,
    name: 'Sinusitis',
    description: 'Inflammation or swelling of the tissue lining the sinuses.',
    plants: [
      { name: 'Eucalyptus', photo: '/pic45.png' },
      { name: 'Peppermint', photo: '/pic46.png' }
    ]
  },
  {
    id: 24,
    name: 'Headaches',
    description: 'Pain in any region of the head.',
    plants: [
      { name: 'Peppermint', photo: 'https://i0.wp.com/youmakeitsimple.com/wp-content/uploads/2016/08/IMG_7251.jpg' },
      { name: 'Feverfew', photo: 'https://th.bing.com/th/id/OIP.WGIgZ_rNjQk829Ho0ouF4gHaE8?rs=1&pid=ImgDetMain' }
    ]
  },
  {
    id: 25,
    name: 'Insomnia',
    description: 'A condition in which you have trouble falling or staying asleep.',
    plants: [
      { name: 'Valerian Root', photo: '/pic49.png' },
      { name: 'Lavender', photo: '/pic50.png' }
    ]
  },
  {
      id: 25,
      name: 'Insomnia',
      description: 'A condition in which you have trouble falling or staying asleep.',
      plants: [
        { name: 'Valerian Root', photo: '/pic49.png' },
        { name: 'Lavender', photo: '/pic50.png' }
      ]
    },
    {
      id: 26,
      name: 'Dandruff',
      description: 'A common scalp condition that causes flakes of skin to appear.',
      plants: [
        { name: 'Tea Tree Oil', photo: 'https://th.bing.com/th/id/OIP.lthN_SJ24jrOoAtVco38QAHaE1?rs=1&pid=ImgDetMain' },
        { name: 'Aloe Vera', photo: 'https://th.bing.com/th/id/OIP.gOGapjdO9JhG84WEDMrqFQHaHD?rs=1&pid=ImgDetMain' }
      ]
    },
    {
      id: 27,
      name: 'Nausea',
      description: 'A feeling of sickness with an inclination to vomit.',
      plants: [
        { name: 'Ginger', photo: 'https://th.bing.com/th/id/R.513721dc614b30cd75b16170493cc077?rik=dz2o0PIsasmzhA&riu=http%3a%2f%2fwww.bhg.com.au%2fmedia%2f23805%2fginger-plant.jpg&ehk=gia6ijFG8MX4Gb0O6HISiKEjf1G6pWR8tn9hg%2fvbnDg%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Peppermint', photo: 'https://th.bing.com/th/id/OIP.H3dqFOeCnDIe2X0nCYaXrwHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain' }
      ]
    },
    {
      id: 28,
      name: 'Stress',
      description: 'A state of mental or emotional strain resulting from adverse or demanding circumstances.',
      plants: [
        { name: 'Ashwagandha', photo: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/en_US/sliced-images/global/articles/what%20is%20ashwagandha%20image.jpg?auto=format' },
        { name: 'Chamomile', photo: 'https://thegardeningdad.com/wp-content/uploads/2020/03/German-Chamomile.jpg' }
      ]
    },
    {
      id: 29,
      name: 'Migraines',
      description: 'A severe headache often accompanied by nausea and sensitivity to light.',
      plants: [
        { name: 'Peppermint', photo: 'https://i0.wp.com/youmakeitsimple.com/wp-content/uploads/2016/08/IMG_7251.jpg' },
        { name: 'Feverfew', photo: 'https://healthjade.com/wp-content/uploads/2018/11/feverfew_herb.jpg' }
      ]
    },
    {
      id: 30,
      name: 'Sinus Congestion',
      description: 'A blockage in the sinus passages often due to inflammation or infection.',
      plants: [
        { name: 'Eucalyptus', photo: '/pic59.png' },
        { name: 'Peppermint', photo: '/pic60.png' }
      ]
    },
    {
      id: 31,
      name: 'Gum Disease',
      description: 'Infection of the tissues that surround and support your teeth.',
      plants: [
        { name: 'Green Tea', photo: '/pic61.png' },
        { name: 'Clove Oil', photo: '/pic62.png' }
      ]
    },
    {
      id: 32,
      name: 'PMS (Premenstrual Syndrome)',
      description: 'A group of symptoms that occur in women typically between ovulation and a period.',
      plants: [
        { name: 'Evening Primrose Oil', photo: '/pic63.png' },
        { name: 'Chamomile', photo: '/pic64.png' }
      ]
    },
    {
      id: 33,
      name: 'Coughing',
      description: 'A sudden, forceful hacking sound to release air and clear an irritation in the throat.',
      plants: [
        { name: 'Honey', photo: 'https://th.bing.com/th/id/OIP.o-AvNNgeeyUM-1_1jxDCfwHaFj?w=1477&h=1107&rs=1&pid=ImgDetMain' },
        { name: 'Thyme', photo: 'https://th.bing.com/th/id/OIP.hplaZ81xWGd0lZoiRH8elgHaE8?rs=1&pid=ImgDetMain' }
      ]
    },
    {
      id: 34,
      name: 'Fever',
      description: 'An elevated body temperature often caused by infection or illness.',
      plants: [
        { name: 'Elderflower', photo: '/pic67.png' },
        { name: 'Peppermint', photo: '/pic68.png' }
      ]
    },
    {
      id: 35,
      name: 'Fatigue',
      description: 'A state of extreme tiredness resulting from mental or physical exertion.',
      plants: [
        { name: 'Ginseng', photo: '/pic69.png' },
        { name: 'Ashwagandha', photo: '/pic70.png' }
      ]
    },
    {
      id: 36,
      name: 'Memory Issues',
      description: 'Problems with remembering information or recalling details.',
      plants: [
        { name: 'Ginkgo Biloba', photo: '/pic71.png' },
        { name: 'Rosemary', photo: '/pic72.png' }
      ]
    },
    {
      id: 37,
      name: 'Digestive Issues',
      description: 'Problems related to the digestive system, including pain, bloating, or discomfort.',
      plants: [
        { name: 'Peppermint', photo: '/pic73.png' },
        { name: 'Ginger', photo: '/pic74.png' }
      ]
    },
    {
      id: 38,
      name: 'Skin Aging',
      description: 'Changes in the skin that occur with aging, such as wrinkles and loss of elasticity.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic75.png' },
        { name: 'Green Tea', photo: '/pic76.png' }
      ]
    },
    {
      id: 39,
      name: 'Varicose Veins',
      description: 'Swollen, twisted veins that are visible just under the skin.',
      plants: [
        { name: 'Horse Chestnut', photo: '/pic77.png' },
        { name: 'Grape Seed Extract', photo: '/pic78.png' }
      ]
    },
    {
      id: 40,
      name: 'Cellulite',
      description: 'Dimpled skin caused by fat deposits under the skin.',
      plants: [
        { name: 'Caffeine', photo: '/pic79.png' },
        { name: 'Ginger', photo: '/pic80.png' }
      ]
    },
    {
      id: 41,
      name: 'Menstrual Irregularities',
      description: 'Irregularities in the menstrual cycle, such as missed periods or abnormal bleeding.',
      plants: [
        { name: 'Vitex', photo: '/pic81.png' },
        { name: 'Evening Primrose Oil', photo: '/pic82.png' }
      ]
    },
    {
      id: 42,
      name: 'Weight Loss',
      description: 'The process of losing body weight through diet, exercise, or other means.',
      plants: [
        { name: 'Green Tea', photo: '/pic83.png' },
        { name: 'Garcinia Cambogia', photo: '/pic84.png' }
      ]
    },
    {
      id: 43,
      name: 'Poor Circulation',
      description: 'Insufficient blood flow to parts of the body.',
      plants: [
        { name: 'Ginkgo Biloba', photo: '/pic85.png' },
        { name: 'Garlic', photo: '/pic86.png' }
      ]
    },
    {
      id: 44,
      name: 'Erectile Dysfunction',
      description: 'The inability to get or keep an erection firm enough for sexual intercourse.',
      plants: [
        { name: 'Ginseng', photo: '/pic87.png' },
        { name: 'Maca Root', photo: '/pic88.png' }
      ]
    },
    {
      id: 45,
      name: 'Hair Loss',
      description: 'The loss of hair from the scalp or body.',
      plants: [
        { name: 'Saw Palmetto', photo: '/pic89.png' },
        { name: 'Rosemary', photo: '/pic90.png' }
      ]
    },
    {
      id: 46,
      name: 'Chronic Fatigue Syndrome',
      description: 'A complex disorder characterized by extreme fatigue that doesn’t improve with rest.',
      plants: [
        { name: 'Ginseng', photo: '/pic91.png' },
        { name: 'Rhodiola', photo: '/pic92.png' }
      ]
    },
    {
      id: 47,
      name: 'Heartburn',
      description: 'A burning sensation in the chest caused by acid reflux.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic93.png' },
        { name: 'Ginger', photo: '/pic94.png' }
      ]
    },
    {
      id: 48,
      name: 'High Cholesterol',
      description: 'Elevated levels of cholesterol in the blood.',
      plants: [
        { name: 'Garlic', photo: '/pic95.png' },
        { name: 'Oats', photo: '/pic96.png' }
      ]
    },
    {
      id: 49,
      name: 'Indigestion',
      description: 'Discomfort in the upper abdomen after eating.',
      plants: [
        { name: 'Peppermint', photo: '/pic97.png' },
        { name: 'Ginger', photo: '/pic98.png' }
      ]
    },
    {
      id: 50,
      name: 'Irritable Bowel Syndrome',
      description: 'A common disorder affecting the large intestine, causing cramping, abdominal pain, and changes in bowel habits.',
      plants: [
        { name: 'Peppermint', photo: '/pic99.png' },
        { name: 'Ginger', photo: '/pic100.png' }
      ]
    },
    {
      id: 51,
      name: 'Gingivitis',
      description: 'Inflammation of the gums, usually caused by plaque buildup.',
      plants: [
        { name: 'Clove Oil', photo: '/pic101.png' },
        { name: 'Green Tea', photo: '/pic102.png' }
      ]
    },
    {
      id: 52,
      name: 'Hemorrhoids',
      description: 'Swollen veins in the lower part of the rectum and anus.',
      plants: [
        { name: 'Witch Hazel', photo: '/pic103.png' },
        { name: 'Aloe Vera', photo: '/pic104.png' }
      ]
    },
    {
      id: 53,
      name: 'Liver Detoxification',
      description: 'The process of removing toxins from the liver.',
      plants: [
        { name: 'Milk Thistle', photo: '/pic105.png' },
        { name: 'Dandelion', photo: '/pic106.png' }
      ]
    },
    {
      id: 54,
      name: 'Rashes',
      description: 'Changes in the skin that can cause itching, redness, and irritation.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic107.png' },
        { name: 'Chamomile', photo: '/pic108.png' }
      ]
    },
    {
      id: 55,
      name: 'Scarring',
      description: 'The formation of a scar as part of the healing process after an injury.',
      plants: [
        { name: 'Vitamin E', photo: '/pic109.png' },
        { name: 'Aloe Vera', photo: '/pic110.png' }
      ]
    },
    {
      id: 56,
      name: 'Acne',
      description: 'A skin condition that occurs when hair follicles become clogged with oil and dead skin cells.',
      plants: [
        { name: 'Tea Tree Oil', photo: '/pic111.png' },
        { name: 'Aloe Vera', photo: '/pic112.png' }
      ]
    },
    {
      id: 57,
      name: 'Psoriasis',
      description: 'An autoimmune condition that leads to the rapid growth of skin cells, causing scaling on the skin’s surface.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic113.png' },
        { name: 'Turmeric', photo: '/pic114.png' }
      ]
    },
    {
      id: 58,
      name: 'Eczema',
      description: 'A condition that makes the skin inflamed, red, and itchy.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic115.png' },
        { name: 'Chamomile', photo: '/pic116.png' }
      ]
    },
    {
      id: 59,
      name: 'Dyspepsia',
      description: 'Indigestion or discomfort in the upper abdomen.',
      plants: [
        { name: 'Peppermint', photo: '/pic117.png' },
        { name: 'Ginger', photo: '/pic118.png' }
      ]
    },
    {
      id: 60,
      name: 'Sinusitis',
      description: 'Inflammation or swelling of the tissue lining the sinuses.',
      plants: [
        { name: 'Eucalyptus', photo: '/pic119.png' },
        { name: 'Peppermint', photo: '/pic120.png' }
      ]
    },
    {
      id: 61,
      name: 'Gallstones',
      description: 'Solid particles that form in the gallbladder.',
      plants: [
        { name: 'Milk Thistle', photo: '/pic121.png' },
        { name: 'Dandelion', photo: '/pic122.png' }
      ]
    },
    {
      id: 62,
      name: 'Thyroid Issues',
      description: 'Disorders related to the thyroid gland, affecting metabolism and energy levels.',
      plants: [
        { name: 'Ashwagandha', photo: '/pic123.png' },
        { name: 'Seaweed', photo: '/pic124.png' }
      ]
    },
    {
      id: 63,
      name: 'Autoimmune Disorders',
      description: 'Conditions where the immune system mistakenly attacks the body.',
      plants: [
        { name: 'Turmeric', photo: '/pic125.png' },
        { name: 'Ginger', photo: '/pic126.png' }
      ]
    },
    {
      id: 64,
      name: 'Irritable Bowel Disease',
      description: 'Chronic inflammation of the digestive tract.',
      plants: [
        { name: 'Peppermint', photo: '/pic127.png' },
        { name: 'Aloe Vera', photo: '/pic128.png' }
      ]
    },
    {
      id: 65,
      name: 'Chronic Pain',
      description: 'Persistent pain lasting longer than usual or beyond the time of injury.',
      plants: [
        { name: 'Turmeric', photo: '/pic129.png' },
        { name: 'Willow Bark', photo: '/pic130.png' }
      ]
    },
    {
      id: 66,
      name: 'Hyperthyroidism',
      description: 'An overactive thyroid gland producing excessive thyroid hormones.',
      plants: [
        { name: 'Lemon Balm', photo: '/pic131.png' },
        { name: 'Bugleweed', photo: '/pic132.png' }
      ]
    },
    {
      id: 67,
      name: 'Hypothyroidism',
      description: 'An underactive thyroid gland producing insufficient thyroid hormones.',
      plants: [
        { name: 'Ashwagandha', photo: '/pic133.png' },
        { name: 'Kelp', photo: '/pic134.png' }
      ]
    },
    {
      id: 68,
      name: 'Anemia',
      description: 'A condition marked by a deficiency of red blood cells or hemoglobin in the blood.',
      plants: [
        { name: 'Nettle', photo: '/pic135.png' },
        { name: 'Dandelion', photo: '/pic136.png' }
      ]
    },
    {
      id: 69,
      name: 'Arthritis',
      description: 'Inflammation of one or more joints causing pain and stiffness.',
      plants: [
        { name: 'Turmeric', photo: '/pic137.png' },
        { name: 'Willow Bark', photo: '/pic138.png' }
      ]
    },
    {
      id: 70,
      name: 'Eczema',
      description: 'A condition that makes the skin inflamed, red, and itchy.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic139.png' },
        { name: 'Chamomile', photo: '/pic140.png' }
      ]
    },
    {
      id: 71,
      name: 'Psoriasis',
      description: 'An autoimmune condition that causes rapid growth of skin cells, leading to scaling on the skin’s surface.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic141.png' },
        { name: 'Turmeric', photo: '/pic142.png' }
      ]
    },
    {
      id: 72,
      name: 'Fibromyalgia',
      description: 'A disorder characterized by widespread musculoskeletal pain and fatigue.',
      plants: [
        { name: 'Turmeric', photo: '/pic143.png' },
        { name: 'Ginger', photo: '/pic144.png' }
      ]
    },
    {
      id: 73,
      name: 'Chronic Fatigue Syndrome',
      description: 'A complex disorder characterized by extreme fatigue that doesn’t improve with rest.',
      plants: [
        { name: 'Ginseng', photo: '/pic145.png' },
        { name: 'Rhodiola', photo: '/pic146.png' }
      ]
    },
    {
      id: 74,
      name: 'Gout',
      description: 'A form of arthritis characterized by sudden, severe pain, redness, and tenderness in the joints.',
      plants: [
        { name: 'Cherry Extract', photo: '/pic147.png' },
        { name: 'Turmeric', photo: '/pic148.png' }
      ]
    },
    {
      id: 75,
      name: 'Celiac Disease',
      description: 'An autoimmune disorder in which the ingestion of gluten leads to damage in the small intestine.',
      plants: [
        { name: 'Ginger', photo: '/pic149.png' },
        { name: 'Peppermint', photo: '/pic150.png' }
      ]
    },
    {
      id: 76,
      name: 'Crohn’s Disease',
      description: 'A type of inflammatory bowel disease (IBD) that causes inflammation of the digestive tract.',
      plants: [
        { name: 'Turmeric', photo: '/pic151.png' },
        { name: 'Aloe Vera', photo: '/pic152.png' }
      ]
    },
    {
      id: 77,
      name: 'Ulcerative Colitis',
      description: 'An inflammatory bowel disease that causes long-lasting inflammation and sores in the digestive tract.',
      plants: [
        { name: 'Aloe Vera', photo: '/pic153.png' },
        { name: 'Peppermint', photo: '/pic154.png' }
      ]
    },
    {
      id: 78,
      name: 'Lupus',
      description: 'A chronic autoimmune disease where the body’s immune system becomes overactive and attacks healthy tissues.',
      plants: [
        { name: 'Turmeric', photo: '/pic155.png' },
        { name: 'Ginger', photo: '/pic156.png' }
      ]
    },
    {
      id: 79,
      name: 'Scleroderma',
      description: 'A group of rare diseases that involve the hardening and tightening of the skin and connective tissues.',
      plants: [
        { name: 'Turmeric', photo: '/pic157.png' },
        { name: 'Ginger', photo: '/pic158.png' }
      ]
    },
    {
      id: 80,
      name: 'Rheumatoid Arthritis',
      description: 'A chronic inflammatory disorder affecting the joints.',
      plants: [
        { name: 'Turmeric', photo: '/pic159.png' },
        { name: 'Willow Bark', photo: '/pic160.png' }
      ]
    },
    {
      id: 81,
      name: 'Multiple Sclerosis',
      description: 'A disease in which the immune system attacks the protective covering of nerves.',
      plants: [
        { name: 'Turmeric', photo: '/pic161.png' },
        { name: 'Ginger', photo: '/pic162.png' }
      ]
    },
    {
      id: 82,
      name: 'Parkinson’s Disease',
      description: 'A progressive nervous system disorder that affects movement.',
      plants: [
        { name: 'Ginkgo Biloba', photo: '/pic163.png' },
        { name: 'Turmeric', photo: '/pic164.png' }
      ]
    },
    {
      id: 83,
      name: 'Alzheimer’s Disease',
      description: 'A progressive disease that destroys memory and other important mental functions.',
      plants: [
        { name: 'Ginkgo Biloba', photo: '/pic165.png' },
        { name: 'Rosemary', photo: '/pic166.png' }
      ]
    },
    {
      id: 84,
      name: 'Schizophrenia',
      description: 'A serious mental disorder in which people interpret reality abnormally.',
      plants: [
        { name: 'Turmeric', photo: '/pic167.png' },
        { name: 'Ginger', photo: '/pic168.png' }
      ]
    },
    {
      id: 85,
      name: 'Bipolar Disorder',
      description: 'A mental health condition characterized by extreme mood swings that include emotional highs and lows.',
      plants: [
        { name: 'St. John\'s Wort', photo: '/pic169.png' },
        { name: 'Saffron', photo: '/pic170.png' }
      ]
    },
    {
      id: 86,
      name: 'Depression',
      description: 'A mood disorder that causes a persistent feeling of sadness and loss of interest.',
      plants: [
        { name: 'St. John\'s Wort', photo: '/pic171.png' },
        { name: 'Saffron', photo: '/pic172.png' }
      ]
    },
    {
      id: 87,
      name: 'Anxiety',
      description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear.',
      plants: [
        { name: 'Valerian Root', photo: '/pic173.png' },
        { name: 'Chamomile', photo: '/pic174.png' }
      ]
    },
    {
      id: 88,
      name: 'Osteoporosis',
      description: 'A condition in which bones become weak and brittle.',
      plants: [
        { name: 'Nettle', photo: '/pic175.png' },
        { name: 'Dandelion', photo: '/pic176.png' }
      ]
    },
    {
      id: 89,
      name: 'Scoliosis',
      description: 'A condition where the spine curves sideways.',
      plants: [
        { name: 'Turmeric', photo: '/pic177.png' },
        { name: 'Ginger', photo: '/pic178.png' }
      ]
    },
    {
      id: 90,
      name: 'Spondylitis',
      description: 'Inflammation of the vertebrae in the spine.',
      plants: [
        { name: 'Turmeric', photo: '/pic179.png' },
        { name: 'Ginger', photo: '/pic180.png' }
      ]
    },
    {
      id: 91,
      name: 'Muscle Pain',
      description: 'Pain that occurs in the muscles and soft tissues.',
      plants: [
        { name: 'Turmeric', photo: '/pic181.png' },
        { name: 'Willow Bark', photo: '/pic182.png' }
      ]
    },
    {
      id: 92,
      name: 'Tinnitus',
      description: 'A condition where you hear ringing or other noises in your ears that are not caused by external sounds.',
      plants: [
        { name: 'Ginkgo Biloba', photo: '/pic183.png' },
        { name: 'Zinc', photo: '/pic184.png' }
      ]
    },
    {
      id: 93,
      name: 'Vertigo',
      description: 'A sensation of spinning or dizziness.',
      plants: [
        { name: 'Ginger', photo: '/pic185.png' },
        { name: 'Peppermint', photo: '/pic186.png' }
      ]
    },
    {
      id: 94,
      name: 'Numbness',
      description: 'Loss of feeling or sensation in a part of the body.',
      plants: [
        { name: 'Ginger', photo: '/pic187.png' },
        { name: 'Turmeric', photo: '/pic188.png' }
      ]
    },
    {
      id: 95,
      name: 'Insomnia',
      description: 'A condition in which you have trouble falling or staying asleep.',
      plants: [
        { name: 'Valerian Root', photo: '/pic189.png' },
        { name: 'Lavender', photo: '/pic190.png' }
      ]
    },
    {
      id: 96,
      name: 'Fungal Infections',
      description: 'Infections caused by fungi, affecting the skin or other parts of the body.',
      plants: [
        { name: 'Tea Tree Oil', photo: '/pic191.png' },
        { name: 'Garlic', photo: '/pic192.png' }
      ]
    },
    {
      id: 97,
      name: 'Bacterial Infections',
      description: 'Infections caused by bacteria, affecting various parts of the body.',
      plants: [
        { name: 'Garlic', photo: '/pic193.png' },
        { name: 'Echinacea', photo: '/pic194.png' }
      ]
    },
    {
      id: 98,
      name: 'Viral Infections',
      description: 'Infections caused by viruses, such as the flu or common cold.',
      plants: [
        { name: 'Echinacea', photo: '/pic195.png' },
        { name: 'Elderberry', photo: '/pic196.png' }
      ]
    },
    {
      id: 99,
      name: 'Cancer Prevention',
      description: 'Measures and treatments aimed at reducing the risk of cancer.',
      plants: [
        { name: 'Turmeric', photo: '/pic197.png' },
        { name: 'Ginger', photo: '/pic198.png' }
      ]
    },
    {
      id: 100,
      name: 'Bone Health',
      description: 'Maintaining the health and strength of bones.',
      plants: [
        { name: 'Bone Broth', photo: '/pic199.png' },
        { name: 'Leafy Greens', photo: '/pic200.png' }
      ]
    }
  ];
  
  // Add more entries as needed

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDiseases, setFilteredDiseases] = useState(diseasesData);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredDiseases(
      diseasesData.filter(disease =>
        disease.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Explore plants that heal your diseases.</h1>
        <input
          type="text"
          placeholder="Search for a disease..."
          value={search}
          onChange={handleSearchChange}
        />
        <Routes>
          <Route path="/" element={<DiseaseList diseases={filteredDiseases} />} />
          <Route path="/disease/:id" element={<DiseaseDetail />} />
        </Routes>
      </header>
    </div>
  );
};

const DiseaseList = ({ diseases }) => {
  return (
    <div>
      <h2>Diseases:</h2>
      <ul className="disease-list">
        {diseases.length > 0 ? (
          diseases.map(disease => (
            <li key={disease.id} className="disease-item">
              <Link to={`/disease/${disease.id}`}>
                <h2>{disease.name}</h2>
                <p>{disease.description}</p>
                <em>Plants that help:</em> {disease.plants.map(plant => plant.name).join(', ')}
              </Link>
            </li>
          ))
        ) : (
          <li>No diseases found</li>
        )}
      </ul>
    </div>
  );
};

const DiseaseDetail = () => {
  const { id } = useParams();
  const disease = diseasesData.find(d => d.id === parseInt(id));

  if (!disease) return <p>Disease not found.</p>;

  return (
    <div className="disease-detail">
      <h1>{disease.name}</h1>
      <p>{disease.description}</p>
      <h2>Plants that help:</h2>
      <ul>
        {disease.plants.map((plant, index) => (
          <li key={index} className="plant-item">
            <h3>{plant.name}</h3>
            <img src={plant.photo} alt={plant.name} className="plant-photo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

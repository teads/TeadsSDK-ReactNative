import ScrollView from './assets/ScrollView.imageset/ScrollView150.png';
import TableView from './assets/TableView.imageset/TableView150.png';
import CollectionView from './assets/CollectionView.imageset/CollectionView150.png';
import WebView from './assets/ScrollView.imageset/ScrollView150.png';

export const HOMESCREEN = 'Home';
export const DEMOSCREEN = 'Demo';
export const NATIVESCREEN = 'Native';
export const TEADSBLUE = '#215790';
export const TEADSPINK = 'rgba(171, 65, 149, 0.7)';
export const CREATIVETYPES = ['Landscape', 'Vertical', 'Square', 'Caroussel'];
export const CUSTOM = 'Custom';
export const COVER_RESIZING = 'cover';
export const RADIUS_CARD = 20;
export const TEST_PID = '84242';
export const DEFAULT_MODAL = false;
export const DEFAULT_CREATIVE = 'Landscape';
export const TAB_INTEGRATIONS = [
  { type: 'ScrollView', image: ScrollView },
  { type: 'TableView', image: TableView },
  { type: 'CollectionView', image: CollectionView },
  { type: 'WebView', image: WebView },
];
export const TAB_NATIVE_ITEMS = [
  {
    icon: 'https://www.theminotvoice.com/wp-content/uploads/sites/2/2016/10/NYT-icon.png',
    text: ' In the latest installment of the “Spider-Man” series, Tom Holland faces the past and a very secure franchise future.',
    title: '‘Spider-Man: No Way Home’ Review',
    media:
      'https://static01.nyt.com/images/2021/12/17/arts/16spider-man-review/merlin_199080312_33263efe-93b3-432c-84ca-6e040624dfdf-superJumbo.jpg?quality=75&auto=webp',
    time: '5',
    source: 'nyt',
    textButton: 'Follow',
  },
  {
    source: 'wsj',
    icon: 'https://play-lh.googleusercontent.com/eksxaPfxbTVb6VTl5aj1sXLpKc_N9Z6AZ3_5Oq6JhTXmgEQza-1v58a66p_ID0phE2Zv',
    media: 'https://images.wsj.net/im-452042?width=860&size=1.5&pixel_ratio=2',
    text: 'Once gas-powered engines are banned, how will Porsche keep its lucrative club-racing business alive? The Mission R is a first stab at the answer.',
    title: 'Porsche Mission R: The All-Electric Future of Racing?',
    time: '7',
    textButton: 'Follow',
  },
  {
    source: 'ign',
    icon: 'https://fr.ign.com/s/ign/social_logo.png',
    media:
      'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg',
    text: 'The Elden Ring was broken. But by whom? And why? Mysteries abound in the latest cinematic trailer for the hotly anticipated Elden Ring.',
    title: 'Elden Ring Cinematic Trailer - The Game Awards 2021',
    time: '12',
    textButton: 'Follow',
  },
  {
    source: 'espn',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPAc5tHzqDURqjTaA9Ud_28G37V4Tbch060AubCB6TeNvarlHG5yWSujrNx-uk4du2ic&usqp=CAU',
    media:
      'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1212%2Fr950038_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg',
    text: 'In a season full of drama and controversy, it almost feels fitting the championship title was decided on the final lap of the Abu Dhabi Grand Prix.',
    title: 'How Max Verstappen won the controversial Abu Dhabi Grand Prix',
    time: '15',
    textButton: 'Follow',
  },
  {
    source: 'vice',
    icon: 'https://marketingreport.eu/Article%20Images/Key%20Logos/Vice.jpg',
    media:
      'https://video-images.vice.com/articles/61b9e2eb528aa2009b8c1317/lede/1639582658924-album-2.jpeg?crop=1xw:1xh;center,center&resize=1800:*',
    text: 'Will Olivia Rodrigo spark intergenerational warfare? Or will Kanye get the thumbs up from all three year groups?',
    title: 'A Boomer, Millennial and Zoomer Argue Over Their Music of the Year',
    time: '16',
    textButton: 'Follow',
  },
];

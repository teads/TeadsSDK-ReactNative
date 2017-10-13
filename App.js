import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import AdView from './AdView';

export default class App extends React.Component {
  render() {
    return (
      <View  style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Cupcake ipsum dolor sit amet topping danish. Candy marzipan sweet marzipan. Cake dragée candy canes pie. Gummi bears tiramisu dessert gingerbread marshmallow fruitcake soufflé. Jujubes ice cream liquorice oat cake gummi bears wafer chocolate bar. Toffee candy canes donut tart sweet cookie muffin. Dessert lemon drops danish carrot cake pudding tart marshmallow icing chocolate bar. Lemon drops tart candy croissant cotton candy sweet. Macaroon gingerbread lollipop donut. Brownie tootsie roll jujubes danish.</Text>
          <Text style={styles.text}>Cupcake bonbon marzipan jujubes chupa chups. Macaroon candy canes dragée ice cream brownie topping icing. Sugar plum croissant bonbon. Chocolate cake gummi bears dessert cookie macaroon biscuit dessert apple pie topping. Muffin sweet cotton candy. Ice cream topping marzipan icing powder dragée pudding. Dessert brownie lollipop chocolate. Soufflé brownie cake cupcake marshmallow.</Text>
          <Text style={styles.text}>Muffin macaroon donut cotton candy bear claw marzipan. Macaroon macaroon cake icing biscuit cake icing soufflé soufflé. Jelly gummies wafer biscuit danish donut bonbon. Croissant candy canes cake biscuit chupa chups oat cake apple pie lemon drops. Tart danish chupa chups. Pie gingerbread brownie lollipop cupcake toffee pie dessert candy canes.</Text>

          <AdView />

          <Text style={styles.text}>Oat cake marshmallow marzipan jelly beans. Pastry candy sweet roll candy gummies. Chocolate lemon drops liquorice. Cookie bear claw marshmallow wafer caramels lollipop marshmallow jujubes tiramisu. Donut marshmallow cheesecake biscuit. Jelly wafer icing danish cupcake jelly.</Text>
          <Text style={styles.text} >Powder brownie marzipan sugar plum icing. Liquorice apple pie chocolate dragée halvah fruitcake croissant bonbon. Chupa chups liquorice donut bear claw cupcake lemon drops caramels. Muffin apple pie dragée cotton candy chupa chups chocolate cake. Danish candy canes soufflé muffin candy canes liquorice cupcake. Fruitcake chupa chups wafer bear claw jelly beans dessert.</Text>
          <Text style={styles.text}>Cupcake ipsum dolor sit amet topping danish. Candy marzipan sweet marzipan. Cake dragée candy canes pie. Gummi bears tiramisu dessert gingerbread marshmallow fruitcake soufflé. Jujubes ice cream liquorice oat cake gummi bears wafer chocolate bar. Toffee candy canes donut tart sweet cookie muffin. Dessert lemon drops danish carrot cake pudding tart marshmallow icing chocolate bar. Lemon drops tart candy croissant cotton candy sweet. Macaroon gingerbread lollipop donut. Brownie tootsie roll jujubes danish.</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
  },
  text: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

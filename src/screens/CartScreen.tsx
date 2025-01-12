import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';
import MenuButton from '../components/MenuButton';

const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();

  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const buttonPressHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Đơn hàng" />

            <View style={styles.InputContainer}>
              <TextInput
                style={styles.Input}
                placeholder="Số bàn"
                value={tableNumber}
                onChangeText={setTableNumber}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.Input}
                placeholder="Tên khách hàng"
                value={customerName}
                onChangeText={setCustomerName}
              />
              <TextInput
                style={styles.Input}
                placeholder="Mã khuyến mãi"
                value={promoCode}
                onChangeText={setPromoCode}
              />
            </View>

            {CartList.length == 0 ? (
              <EmptyListAnimation title={'Đã thêm đơn hàng'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                      priceColor={COLORS.primaryBlackHex}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {CartList.length != 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Thanh toán"
              price={{price: CartPrice, currency: '$'}}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>

      <MenuButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
  InputContainer: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  Input: {
    borderWidth: 1,
    borderColor: COLORS.primaryGreyHex,
    borderRadius: 5,
    padding: SPACING.space_10,
    marginBottom: SPACING.space_10,
  },
  priceText: {
    color: COLORS.primaryBlackHex,
  },
});

export default CartScreen;

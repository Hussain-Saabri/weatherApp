import React from "react";
import { BottomNavigation, BottomNavigationTab, Text, Icon } from "@ui-kitten/components";

const homeIcon = (props) => <Icon {...props} name="home-outline" />;
const taxIcon = (props) => <Icon {...props} name="credit-card-outline" />;
const statusIcon = (props) => <Icon {...props} name="file-text-outline" />;
const profileIcon = (props) => <Icon {...props} name="person-outline" />;

const LandlordBottomNavigation = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={homeIcon} title={() => <Text category="label">Home</Text>} />
    <BottomNavigationTab icon={taxIcon} title={() => <Text category="label">Payment</Text>} />
    <BottomNavigationTab icon={statusIcon} title={() => <Text category="label">Status</Text>} />
    <BottomNavigationTab icon={profileIcon} title={() => <Text category="label">Profile</Text>} />
  </BottomNavigation>
);

export default LandlordBottomNavigation;
import React from "react";
import "./Row1.css";
import { Link } from "react-router-dom";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { HiOutlineTrendingUp } from "react-icons/hi";

function Row1() {
  return (
    <div>
      <HStack ml="15px" gap="28px" mb="20px">
        <Icon boxSize="20px" as={HiOutlineTrendingUp} />
        <Text fontSize="1.35rem" fontWeight="bold">
          {" "}
          Trending
        </Text>
      </HStack>
      <div className="third-div-title-image">
        <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-0._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹14937.58</p>
              </div>
              <div className="offer-price">
                <del>₹16903.16</del>
              </div>
              <div className="discount">12% OFF</div>
            </div>
          </div>
        </Link>
        <Link to="/products">
          {" "}
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-0._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹3380.00</p>
              </div>
              <div className="offer-price">
                <del>₹3773.12</del>
              </div>
              <div className="discount">10% OFF</div>
            </div>
          </div>
        </Link>
        <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹675.37</p>
              </div>
              <div className="offer-price">
                <del>₹1178.56</del>
              </div>
              <div className="discount">43% OFF</div>
            </div>
          </div>
        </Link>
        <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2021-11-09/63in1-Screwdriver-Set-Gray-477863-0._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹1021.31</p>
              </div>
              <div className="offer-price">
                <del>₹1571.67</del>
              </div>
              <div className="discount">35% OFF</div>
            </div>
          </div>
        </Link>
        {/* <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹1178.56</p>
              </div>
              <div className="offer-price">
                <del>₹1964.79</del>
              </div>
              <div className="discount">40% OFF</div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Row1;

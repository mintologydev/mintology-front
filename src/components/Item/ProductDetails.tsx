/** @format */

import React from 'react'
import ProjectReviewImg1 from 'img/project_review.jpg'
import ProjectReviewImg2 from 'img/project_review2.jpg'
import ProjectReviewImg3 from 'img/project_review3.jpg'
import ProjectReviewImg4 from 'img/project_review4.jpg'
import 'style/item/product-details.less'
// import DiscordImg from 'img/icon_discord.svg'
import TwitterIcon from 'img/icon_twitter.svg'
import InstagramIcon from 'img/logo-instagram.svg'
import EtherscanIcon from 'img/etherscan.svg'

export default function ProductDetails() {
  return (
    <div className="product-details">
      <table className="pc">
        <tbody>
          <tr>
            <td>
              <div className="td-between">
                <span>Contract Address</span>
                <div>
                  <a href="https://etherscan.io/address/0x2c5adc8ec23fda180ad1e52af3d9c19b4b21b82c" target="_blank">
                    <span>0x2c5adc8ec23fda180ad1e52af3d9c19b4b21b82c</span>
                    <img src={EtherscanIcon} />
                  </a>
                </div>
              </div>
            </td>
            <td>
              <div className="td-between">
                <span>Token ID</span>
                <div>#412-#1299</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Token Standard</span>
                <div>ERC-721</div>
              </div>
            </td>
            <td>
              <div className="td-between">
                <span>Blockchain</span>
                <div>Ethereum</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Official Website</span>
                <a className="official-website" href="https://cheekycorgi.com/" target="_blank">
                  <span>https://cheekycorgi.com/</span>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon_right2-sel"></use>
                  </svg>
                </a>
              </div>
            </td>
            <td>
              <div className="td-between">
                <span>Social Media</span>
                <div className="media-list">
                  <a href="https://twitter.com/cheeky_corgi" target="_blank">
                    <img src={TwitterIcon} />
                  </a>
                  <a href="https://www.instagram.com/cheekycorginft/" target="_blank">
                    <img src={InstagramIcon} />
                  </a>
                  <a href="https://bit.ly/3ENSrVU" target="_blank">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-icon_discord" />
                    </svg>
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="h5">
        <tbody>
          <tr>
            <td>
              <div className="td-between">
                <span>Contract Address</span>
                <a href="https://etherscan.io/address/0x2c5adc8ec23fda180ad1e52af3d9c19b4b21b82c" target="_blank">
                  <span>0x2c5a...b82c</span>
                  <img src={EtherscanIcon} />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Token ID</span>
                <div>#412-#1299</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Token Standard</span>
                <div>ERC-721</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Blockchain</span>
                <div>Ethereum</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Official Website</span>
                <a className="official-website" href="https://cheekycorgi.com/" target="_blank">
                  <span>https://cheekycorgi.com/</span>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon_right2-sel"></use>
                  </svg>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Social Media</span>
                <div className="media-list">
                  <a href="https://twitter.com/cheeky_corgi" target="_blank">
                    <img src={TwitterIcon} />
                  </a>
                  <a href="https://www.instagram.com/cheekycorginft/" target="_blank">
                    <img src={InstagramIcon} />
                  </a>
                  <a href="https://bit.ly/3ENSrVU" target="_blank">
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-icon_discord" />
                    </svg>
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div className="project-copy">Project copy</div> */}

      <div className="desc-box">
        <h3 className="title">CheekyCorgi</h3>
        <div className="info-block">
          <h3>Project Description</h3>
          <p>
            CheekyCorgi are unique and randomly generated NFT social avatars living in the corgiland on blockchain. They
            are cheeky, cuddly and love to make friends.
          </p>
        </div>
        <div className="info-block">
          <h3>Creator Introduction</h3>
          <p>
            CheekyCorgi is brought to you by corgi lover and made for corgi lovers. CheekyCorgi has a mission to build a
            community around corgi/pet lovers and bring NFT/blockchain to the mainstream through the community.
          </p>
        </div>

        <div className="info-block">
          <h3>Collection or Item Details</h3>

          <p>CheekyCorgi NFT collectibles have 79 carefully crafted traits.</p>
          <p>There are in total 8999 CheekyCorgi NFTs;</p>
          <p>#0001 is the alpha corgi (not for sale);</p>
          <p>#0002- #0012 are legendary corgis which we will live them for auction after the initial minting;</p>
          <p>#0013- #0111 (total 99 NFTs) are reserved for corgi owners to claim for free;</p>
          <p>Another 300 CheekyCorgi NFTs are reserved for the team and marketing purpose;</p>
          <p>The rest NFTs (total 8588) are open for minting.</p>
          <p>
            CheekyCorgi NFT holder will be rewarded with 5 SPLOOT token (ERC20) daily. Sploot token can be used to
            change your CheekyCorgi’s name and bio in one month after CheekyCorgi public sale. The cost for changing
            name and bio is 150 sploot token each. Sploot token staking system will also be available in November for
            token holder. Proceeds from royalties to be voted and decided by NFT holders, for example donation.
          </p>
        </div>
        <div className="preview-box">
          <h3>Collection Preview</h3>
          <div className="img-list">
            <div className="img-box">
              <img src={ProjectReviewImg1} />
            </div>
            <div className="img-box">
              <img src={ProjectReviewImg2} />
            </div>
            <div className="img-box">
              <img src={ProjectReviewImg3} />
            </div>
            <div className="img-box">
              <img src={ProjectReviewImg4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

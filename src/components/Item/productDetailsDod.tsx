/**
 * /* eslint-disable @typescript-eslint/no-var-requires
 *
 * @format
 */

/** @format */

import React from 'react'
import ProjectReviewImg2 from 'img/jpg1@2x.png'
import ProjectReviewImg3 from 'img/jpg2@2x.png'
import ProjectReviewImg4 from 'img/jpg3@2x.png'
import ProjectReviewImg5 from 'img/jpg4@2x.png'
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
                  <a>
                    <span>To be launched soon</span>
                  </a>
                </div>
              </div>
            </td>
            <td>
              <div className="td-between">
                <span>Token ID</span>
                <div>#1-#2080</div>
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
                <a className="official-website" href="https://www.djzofdgen.com/" target="_blank">
                  <span>https://www.djzofdgen.com/</span>
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
                  <a href="https://twitter.com/DJzofDGEN" target="_blank">
                    <img src={TwitterIcon} />
                  </a>
                  <a href="http://discord.gg/VEs7AzPP43" target="_blank">
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
                <a>
                  <span>To be launched soon</span>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="td-between">
                <span>Token ID</span>
                <div>#1-#2080</div>
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
                <a className="official-website" href="https://www.djzofdgen.com/" target="_blank">
                  <span>https://www.djzofdgen.com/</span>
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
                  <a href="https://twitter.com/DJzofDGEN" target="_blank">
                    <img src={TwitterIcon} />
                  </a>
                  <a href="http://discord.gg/VEs7AzPP43" target="_blank">
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
        <h3 className="title">DJz of DGEN</h3>
        <div className="info-block">
          <h3>Project Description</h3>
          <p>
            The self-proclaimed DJz of DGEN (DoD), a metaphor mash-up of old-school nostalgia and the new school of the
            crypto savvy, are really nothing but a rag-tag group of misfits - a hive of degens looking to light flaming
            pyres of their former selves at the crossroads of Somewhere and Nowhere.
          </p>
          <p>
            The DJz of DGEN Disciple's release are you keys to bridge the Metaverse with AR Avatars. Don't miss them.
          </p>
        </div>
        <div className="info-block">
          <h3>Creator Introduction</h3>
          <p>
            MC Gas - NFT Degen & Musician. All-round legend, MC Gas has started out as a liquid, but as things in Crypto
            have been heating up, he’s taken his final gaseous form.{' '}
          </p>
          <p>
            DJ Choppa - All the way from Down Under, DJ Choppa brings deep crypto knowledge and an unrivalled curiosity
            and passion to the space. Also resides at the beach, and swims frequently. Despite being a Shark, he does
            not live in water.
          </p>
          <p>
            MC Liquid - Like a good Snake Charmer, liquid rallies the troops. The fearless leader functions best in
            cool, wet environments where water can flow freely.{' '}
          </p>
          <p>
            As a team, the DJ’s drive the DoD as one of the most innovative and groundbreaking PFP projects on the
            market at the moment.
          </p>
        </div>

        <div className="info-block">
          <h3>Collection or Item Details</h3>
          <p>2000 Disciples - All Unique generative collection of photorealistic Fox Avatars; </p>
          <p>50 Traits - 50 Unique traits makes up the Fox Disciples; </p>
          <p>30 Special Mints - Unique.</p>
        </div>
        <div className="preview-box">
          <h3>Collection Preview</h3>
          <div className="img-list">
            <div className="left">
              <video
                className="video"
                // style={{width: '430px', height: '430px'}}
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                src={require('../../img/video/shipin.mp4').default}
                muted
                controls
                autoPlay
                loop></video>
            </div>
            <div className="right">
              <div className="top">
                <img src={ProjectReviewImg3} />
                <img src={ProjectReviewImg4} />
              </div>
              <div className="bottom">
                <img src={ProjectReviewImg2} />
                <img src={ProjectReviewImg5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

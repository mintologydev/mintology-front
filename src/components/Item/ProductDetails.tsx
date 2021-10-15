/** @format */

import React from 'react'
import 'style/item/product-details.less'

export default function ProductDetails() {
  return (
    <div className="product-details">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="td-between">
                <span>Contract Address</span>
                <div>0x495f….7v5e</div>
              </div>
            </td>
            <td>
              <div className="td-between">
                <span>Token ID</span>
                <div>567887567898765</div>
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
                <div>Etherrum</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="project-copy">Project copy</div>
    </div>
  )
}

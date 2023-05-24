import { config } from '../../config'
import { clientRequest } from '../../request'

export const aliyunOss = {
  /**
   *
   * @returns
   */
  aliyunImagUploadAddressAdnAuth: function () {
    return clientRequest.get(`${config.boss}/boss/course/upload/aliyunImagUploadAddressAdnAuth.json`)
  },
  /**
   *
   * @param params
   * @returns
   */
  aliyunVideoUploadAddressAdnAuth: function (params:any) {
    return clientRequest.get(`${config.boss}/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json`, { params })
  },
  /**
   *
   * @param data
   * @returns
   */
  transCodeVideo: function (data:any) {
    return clientRequest.post(`${config.boss}/boss/course/upload/aliyunTransCode.json`, data)
  },
  /**
   *
   * @param lessonId
   * @returns
   */
  getAliyunTransCodePercent: function (lessonId: string| number) {
    return clientRequest(`${config.boss}/boss/course/upload/aliyunTransCodePercent.json`, { params: { lessonId } })
  }
}

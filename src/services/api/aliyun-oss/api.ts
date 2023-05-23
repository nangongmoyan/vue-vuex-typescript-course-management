import { clientRequest } from '../../request'

export const aliyunOss = {
  /**
   *
   * @returns
   */
  aliyunImagUploadAddressAdnAuth: function () {
    return clientRequest.get('/boss/course/upload/aliyunImagUploadAddressAdnAuth.json')
  },
  /**
   *
   * @param params
   * @returns
   */
  aliyunVideoUploadAddressAdnAuth: function (params:any) {
    return clientRequest.get('/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json', { params })
  },
  /**
   *
   * @param data
   * @returns
   */
  transCodeVideo: function (data:any) {
    return clientRequest.post('/boss/course/upload/aliyunTransCode.json', data)
  },
  /**
   *
   * @param lessonId
   * @returns
   */
  getAliyunTransCodePercent: function (lessonId: string| number) {
    return clientRequest('/boss/course/upload/aliyunTransCodePercent.json', { params: { lessonId } })
  }
}

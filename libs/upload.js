import { authAxios } from "setups/axios";

export const triggerInput = (ref) => {
  const input = ref.current;
  input.click();
};

export const constructUploader = ({ id, collection, onSuccess }) => {
  return async (e, data) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (!file) return;

    const extension = file.name.split(".").pop();

    const formData = new FormData();

    formData.append("files", e.target.files[0], id + `.${extension}`);
    formData.append("path", data.path);
    formData.append("field", data.field);

    formData.append("ref", collection);
    formData.append("refId", data.id || id);

    const res = await authAxios()({
      url: "/upload",
      method: "POST",
      data: formData,
    }).catch((error) => console.log(error.response, error));

    if (res) {
      onSuccess();
    }
  };
};

export const constructMultiUploader = ({ id, collection, onSuccess }) => {
  return async (e, data) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("files", e.target.files[0], seller.id);
    formData.append("path", data.path);

    const res = await authAxios()({
      url: "/upload",
      method: "POST",
      data: formData,
    });

    if (res) {
      const newImages = (res.data && res.data.map((image) => image.id)) || [];

      const x_Res = authAxios()({
        url: `/${collection}/${id}`,
        method: "PUT",
        data: {
          images: [...data.images, ...newImages],
        },
      });

      if (xRes) {
        onSuccess();
      }
    }
  };
};
